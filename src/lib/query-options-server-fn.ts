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
    : never
  : never;

export type ExtractOutput<T> = T extends [any, infer Out] ? Out : never;

export function queryOptionsServerFn<
  Fn extends FetcherLike,
  In = ExtractInput<ExtractFetcher<Fn>>,
  Out = ExtractOutput<ExtractFetcher<Fn>>,
>(fetcher: Fn, queryKey: QueryKey) {
  return {
    queryOptions: (params: In, options?: UnusedSkipTokenOptions<Out, Error>) =>
      queryOptions({
        queryKey: [queryKey, params],
        queryFn: () => fetcher({ data: params }),
        ...options,
      }),
  };
}
