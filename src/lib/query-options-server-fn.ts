/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  QueryKey,
  queryOptions,
  UnusedSkipTokenOptions,
} from '@tanstack/react-query';
import { OptionalFetcher, RequiredFetcher } from '@tanstack/react-start';

export type FetcherLike =
  | OptionalFetcher<any, any, any, any>
  | RequiredFetcher<any, any, any, any>;

export type ExtractFetcher<T> = T extends
  | OptionalFetcher<any, any, infer In, infer Out>
  | RequiredFetcher<any, any, infer In, infer Out>
  ? [In, Out]
  : never;

export type ExtractInput<T> = T extends [infer In, any]
  ? In extends (...args: any) => any
    ? Parameters<In>[0]
    : undefined
  : never;

export type ExtractOutput<T> = T extends [any, infer Out] ? Out : never;

export type QueryOptionsArgs<In, Out> = In extends undefined
  ? [options?: UnusedSkipTokenOptions<Out, Error>]
  : [params: In, options?: UnusedSkipTokenOptions<Out, Error>];

export function queryOptionsServerFn<
  Fn extends FetcherLike,
  In = ExtractInput<ExtractFetcher<Fn>>,
  Out = ExtractOutput<ExtractFetcher<Fn>>,
>(fetcher: Fn, queryKey: QueryKey) {
  return {
    queryOptions: (...args: QueryOptionsArgs<In, Out>) => {
      const [first, second] = args as [
        In | UnusedSkipTokenOptions<Out, Error>,
        UnusedSkipTokenOptions<Out, Error>,
      ];

      const params = second !== undefined ? (first as In) : (undefined as In);
      const options =
        second !== undefined
          ? second
          : (first as UnusedSkipTokenOptions<Out, Error> | undefined);

      return queryOptions({
        queryKey: [queryKey, params],
        queryFn: () => fetcher({ data: params }),
        ...options,
      });
    },
  };
}
