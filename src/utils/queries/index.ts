/* eslint-disable @typescript-eslint/no-explicit-any */

import type { OptionalFetcher } from '@tanstack/react-start';

import {
  queryOptions,
  type QueryKey,
  type UseQueryOptions,
} from '@tanstack/react-query';

type ExtractFetcherInput<T> =
  T extends OptionalFetcher<any, any, (...args: any[]) => infer U, any>
    ? U
    : never;

type ExtractFetcherOutput<T> =
  T extends OptionalFetcher<any, any, any, infer U> ? U : never;

export const createQueryOptionalFn = <
  T extends OptionalFetcher<any, any, any, any>,
  In extends ExtractFetcherInput<T>,
  Out extends ExtractFetcherOutput<T>,
>(
  fetcher: T,
  queryKey: QueryKey,
) => {
  return (
    params?: In,
    options?: Omit<UseQueryOptions<Out, Error>, 'queryKey' | 'queryFn'>,
  ) =>
    queryOptions({
      queryKey: [...queryKey, params],
      queryFn: ({ signal }): Promise<Out> => fetcher({ data: params, signal }),
      ...options,
    });
};
