/* eslint-disable @typescript-eslint/no-explicit-any */

import type { OptionalFetcher, RequiredFetcher } from '@tanstack/react-start';

import {
  queryOptions,
  type QueryKey,
  type UseQueryOptions,
} from '@tanstack/react-query';
import { z } from 'zod';

type ExtractOptionalFetcherInput<T> =
  T extends OptionalFetcher<any, any, (...args: any[]) => infer U, any>
    ? U
    : never;

type ExtractOptionalFetcherOutput<T> =
  T extends OptionalFetcher<any, any, any, infer U> ? U : never;

export const createQueryOptionalFn = <
  T extends OptionalFetcher<any, any, any, any>,
  In extends ExtractOptionalFetcherInput<T>,
  Out extends ExtractOptionalFetcherOutput<T>,
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

/**
 * Generic Usage
 */
export type FetcherLike =
  | OptionalFetcher<any, any, any, any>
  | RequiredFetcher<any, any, any, any>;

export type ExtractFetcherInput<T> = T extends
  | OptionalFetcher<any, any, infer U, any>
  | RequiredFetcher<any, any, infer U, any>
  ? U extends z.ZodType['parse']
    ? ReturnType<U>
    : U extends z.ZodType<infer Y>
      ? Y
      : never
  : never;

export type ExtractFetcherOutput<T> = T extends
  | OptionalFetcher<any, any, any, infer U>
  | RequiredFetcher<any, any, any, infer U>
  ? U
  : never;

export const queryOptionsServerFn = <
  Fn extends FetcherLike,
  In extends ExtractFetcherInput<Fn>,
  Out extends ExtractFetcherOutput<Fn>,
>(
  fetcher: Fn,
  queryKey: QueryKey,
) => {
  return (
    params: In,
    options?: Omit<UseQueryOptions<Out, Error>, 'queryKey' | 'queryFn'>,
  ) =>
    queryOptions({
      queryKey: [...queryKey, params],
      queryFn: ({ signal }): Promise<Out> => fetcher({ data: params, signal }),
      ...options,
    });
};
