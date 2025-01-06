/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * API
 * API
 * OpenAPI spec version: 1.0
 */
import {
  useMutation,
  useQuery,
  useSuspenseQuery
} from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult
} from '@tanstack/react-query'
import type {
  Category,
  CreateCategoryDto,
  UpdateCategoryDto
} from './endpoints.schemas'
import { axiosInstance } from '../services/axios-instance';




export const createCategory = (
    createCategoryDto: CreateCategoryDto,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<Category>(
      {url: `/categories`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createCategoryDto, signal
    },
      );
    }
  


export const getCreateCategoryMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createCategory>>, TError,{data: CreateCategoryDto}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof createCategory>>, TError,{data: CreateCategoryDto}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createCategory>>, {data: CreateCategoryDto}> = (props) => {
          const {data} = props ?? {};

          return  createCategory(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof createCategory>>>
    export type CreateCategoryMutationBody = CreateCategoryDto
    export type CreateCategoryMutationError = void

    export const useCreateCategory = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createCategory>>, TError,{data: CreateCategoryDto}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof createCategory>>,
        TError,
        {data: CreateCategoryDto},
        TContext
      > => {

      const mutationOptions = getCreateCategoryMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const getCategories = (
    
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<Category[]>(
      {url: `/categories`, method: 'GET', signal
    },
      );
    }
  

export const getGetCategoriesQueryKey = () => {
    return [`/categories`] as const;
    }

    
export const getGetCategoriesQueryOptions = <TData = Awaited<ReturnType<typeof getCategories>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetCategoriesQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getCategories>>> = ({ signal }) => getCategories(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof getCategories>>>
export type GetCategoriesQueryError = unknown


export function useGetCategories<TData = Awaited<ReturnType<typeof getCategories>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCategories>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategories<TData = Awaited<ReturnType<typeof getCategories>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCategories>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategories<TData = Awaited<ReturnType<typeof getCategories>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetCategories<TData = Awaited<ReturnType<typeof getCategories>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetCategoriesQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetCategoriesSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof getCategories>>, TError = unknown>( options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetCategoriesQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getCategories>>> = ({ signal }) => getCategories(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetCategoriesSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getCategories>>>
export type GetCategoriesSuspenseQueryError = unknown


export function useGetCategoriesSuspense<TData = Awaited<ReturnType<typeof getCategories>>, TError = unknown>(
  options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategoriesSuspense<TData = Awaited<ReturnType<typeof getCategories>>, TError = unknown>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategoriesSuspense<TData = Awaited<ReturnType<typeof getCategories>>, TError = unknown>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetCategoriesSuspense<TData = Awaited<ReturnType<typeof getCategories>>, TError = unknown>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetCategoriesSuspenseQueryOptions(options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getCategory = (
    id: string,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<Category>(
      {url: `/categories/${id}`, method: 'GET', signal
    },
      );
    }
  

export const getGetCategoryQueryKey = (id: string,) => {
    return [`/categories/${id}`] as const;
    }

    
export const getGetCategoryQueryOptions = <TData = Awaited<ReturnType<typeof getCategory>>, TError = void>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetCategoryQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getCategory>>> = ({ signal }) => getCategory(id, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetCategoryQueryResult = NonNullable<Awaited<ReturnType<typeof getCategory>>>
export type GetCategoryQueryError = void


export function useGetCategory<TData = Awaited<ReturnType<typeof getCategory>>, TError = void>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCategory>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategory<TData = Awaited<ReturnType<typeof getCategory>>, TError = void>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCategory>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategory<TData = Awaited<ReturnType<typeof getCategory>>, TError = void>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetCategory<TData = Awaited<ReturnType<typeof getCategory>>, TError = void>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetCategoryQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetCategorySuspenseQueryOptions = <TData = Awaited<ReturnType<typeof getCategory>>, TError = void>(id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetCategoryQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getCategory>>> = ({ signal }) => getCategory(id, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetCategorySuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getCategory>>>
export type GetCategorySuspenseQueryError = void


export function useGetCategorySuspense<TData = Awaited<ReturnType<typeof getCategory>>, TError = void>(
 id: string, options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategorySuspense<TData = Awaited<ReturnType<typeof getCategory>>, TError = void>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetCategorySuspense<TData = Awaited<ReturnType<typeof getCategory>>, TError = void>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetCategorySuspense<TData = Awaited<ReturnType<typeof getCategory>>, TError = void>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetCategorySuspenseQueryOptions(id,options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const updateCategory = (
    id: string,
    updateCategoryDto: UpdateCategoryDto,
 ) => {
      
      
      return axiosInstance<Category>(
      {url: `/categories/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: updateCategoryDto
    },
      );
    }
  


export const getUpdateCategoryMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateCategory>>, TError,{id: string;data: UpdateCategoryDto}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof updateCategory>>, TError,{id: string;data: UpdateCategoryDto}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateCategory>>, {id: string;data: UpdateCategoryDto}> = (props) => {
          const {id,data} = props ?? {};

          return  updateCategory(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UpdateCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof updateCategory>>>
    export type UpdateCategoryMutationBody = UpdateCategoryDto
    export type UpdateCategoryMutationError = void

    export const useUpdateCategory = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateCategory>>, TError,{id: string;data: UpdateCategoryDto}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof updateCategory>>,
        TError,
        {id: string;data: UpdateCategoryDto},
        TContext
      > => {

      const mutationOptions = getUpdateCategoryMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const deleteCategory = (
    id: string,
 ) => {
      
      
      return axiosInstance<Category>(
      {url: `/categories/${id}`, method: 'DELETE'
    },
      );
    }
  


export const getDeleteCategoryMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteCategory>>, TError,{id: string}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof deleteCategory>>, TError,{id: string}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteCategory>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteCategory(id,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof deleteCategory>>>
    
    export type DeleteCategoryMutationError = void

    export const useDeleteCategory = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteCategory>>, TError,{id: string}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof deleteCategory>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteCategoryMutationOptions(options);

      return useMutation(mutationOptions);
    }
    