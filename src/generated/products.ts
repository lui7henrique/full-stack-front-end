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
  CreateProductDto,
  UpdateProductDto,
  UploadProductImageBody
} from './endpoints.schemas'
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  Product,
  UploadProductImage200
} from './endpoints.schemas'
import { axiosInstance } from '../services/axios-instance';




export const createProduct = (
    createProductDto: CreateProductDto,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<Product>(
      {url: `/products`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createProductDto, signal
    },
      );
    }
  


export const getCreateProductMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createProduct>>, TError,{data: CreateProductDto}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof createProduct>>, TError,{data: CreateProductDto}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createProduct>>, {data: CreateProductDto}> = (props) => {
          const {data} = props ?? {};

          return  createProduct(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateProductMutationResult = NonNullable<Awaited<ReturnType<typeof createProduct>>>
    export type CreateProductMutationBody = CreateProductDto
    export type CreateProductMutationError = void

    export const useCreateProduct = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createProduct>>, TError,{data: CreateProductDto}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof createProduct>>,
        TError,
        {data: CreateProductDto},
        TContext
      > => {

      const mutationOptions = getCreateProductMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const getProducts = (
    
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<Product[]>(
      {url: `/products`, method: 'GET', signal
    },
      );
    }
  

export const getGetProductsQueryKey = () => {
    return [`/products`] as const;
    }

    
export const getGetProductsQueryOptions = <TData = Awaited<ReturnType<typeof getProducts>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProductsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProducts>>> = ({ signal }) => getProducts(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetProductsQueryResult = NonNullable<Awaited<ReturnType<typeof getProducts>>>
export type GetProductsQueryError = unknown


export function useGetProducts<TData = Awaited<ReturnType<typeof getProducts>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProducts>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProducts<TData = Awaited<ReturnType<typeof getProducts>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProducts>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProducts<TData = Awaited<ReturnType<typeof getProducts>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetProducts<TData = Awaited<ReturnType<typeof getProducts>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetProductsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetProductsSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof getProducts>>, TError = unknown>( options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProductsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProducts>>> = ({ signal }) => getProducts(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetProductsSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getProducts>>>
export type GetProductsSuspenseQueryError = unknown


export function useGetProductsSuspense<TData = Awaited<ReturnType<typeof getProducts>>, TError = unknown>(
  options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProductsSuspense<TData = Awaited<ReturnType<typeof getProducts>>, TError = unknown>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProductsSuspense<TData = Awaited<ReturnType<typeof getProducts>>, TError = unknown>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetProductsSuspense<TData = Awaited<ReturnType<typeof getProducts>>, TError = unknown>(
  options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetProductsSuspenseQueryOptions(options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getProduct = (
    id: string,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<Product>(
      {url: `/products/${id}`, method: 'GET', signal
    },
      );
    }
  

export const getGetProductQueryKey = (id: string,) => {
    return [`/products/${id}`] as const;
    }

    
export const getGetProductQueryOptions = <TData = Awaited<ReturnType<typeof getProduct>>, TError = void>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProductQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProduct>>> = ({ signal }) => getProduct(id, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetProductQueryResult = NonNullable<Awaited<ReturnType<typeof getProduct>>>
export type GetProductQueryError = void


export function useGetProduct<TData = Awaited<ReturnType<typeof getProduct>>, TError = void>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProduct>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProduct<TData = Awaited<ReturnType<typeof getProduct>>, TError = void>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProduct>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProduct<TData = Awaited<ReturnType<typeof getProduct>>, TError = void>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetProduct<TData = Awaited<ReturnType<typeof getProduct>>, TError = void>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetProductQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetProductSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof getProduct>>, TError = void>(id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetProductQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProduct>>> = ({ signal }) => getProduct(id, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetProductSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getProduct>>>
export type GetProductSuspenseQueryError = void


export function useGetProductSuspense<TData = Awaited<ReturnType<typeof getProduct>>, TError = void>(
 id: string, options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProductSuspense<TData = Awaited<ReturnType<typeof getProduct>>, TError = void>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetProductSuspense<TData = Awaited<ReturnType<typeof getProduct>>, TError = void>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetProductSuspense<TData = Awaited<ReturnType<typeof getProduct>>, TError = void>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetProductSuspenseQueryOptions(id,options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const updateProduct = (
    id: string,
    updateProductDto: UpdateProductDto,
 ) => {
      
      
      return axiosInstance<Product>(
      {url: `/products/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: updateProductDto
    },
      );
    }
  


export const getUpdateProductMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateProduct>>, TError,{id: string;data: UpdateProductDto}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof updateProduct>>, TError,{id: string;data: UpdateProductDto}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateProduct>>, {id: string;data: UpdateProductDto}> = (props) => {
          const {id,data} = props ?? {};

          return  updateProduct(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UpdateProductMutationResult = NonNullable<Awaited<ReturnType<typeof updateProduct>>>
    export type UpdateProductMutationBody = UpdateProductDto
    export type UpdateProductMutationError = void

    export const useUpdateProduct = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateProduct>>, TError,{id: string;data: UpdateProductDto}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof updateProduct>>,
        TError,
        {id: string;data: UpdateProductDto},
        TContext
      > => {

      const mutationOptions = getUpdateProductMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const deleteProduct = (
    id: string,
 ) => {
      
      
      return axiosInstance<Product>(
      {url: `/products/${id}`, method: 'DELETE'
    },
      );
    }
  


export const getDeleteProductMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteProduct>>, TError,{id: string}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof deleteProduct>>, TError,{id: string}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteProduct>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteProduct(id,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteProductMutationResult = NonNullable<Awaited<ReturnType<typeof deleteProduct>>>
    
    export type DeleteProductMutationError = void

    export const useDeleteProduct = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteProduct>>, TError,{id: string}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof deleteProduct>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteProductMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const uploadProductImage = (
    id: string,
    uploadProductImageBody: UploadProductImageBody,
 signal?: AbortSignal
) => {
      
      const formData = new FormData();
if(uploadProductImageBody.file !== undefined) {
 formData.append('file', uploadProductImageBody.file)
 }

      return axiosInstance<UploadProductImage200>(
      {url: `/products/${id}/image`, method: 'POST',
      headers: {'Content-Type': 'multipart/form-data', },
       data: formData, signal
    },
      );
    }
  


export const getUploadProductImageMutationOptions = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof uploadProductImage>>, TError,{id: string;data: UploadProductImageBody}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof uploadProductImage>>, TError,{id: string;data: UploadProductImageBody}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof uploadProductImage>>, {id: string;data: UploadProductImageBody}> = (props) => {
          const {id,data} = props ?? {};

          return  uploadProductImage(id,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UploadProductImageMutationResult = NonNullable<Awaited<ReturnType<typeof uploadProductImage>>>
    export type UploadProductImageMutationBody = UploadProductImageBody
    export type UploadProductImageMutationError = void

    export const useUploadProductImage = <TError = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof uploadProductImage>>, TError,{id: string;data: UploadProductImageBody}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof uploadProductImage>>,
        TError,
        {id: string;data: UploadProductImageBody},
        TContext
      > => {

      const mutationOptions = getUploadProductImageMutationOptions(options);

      return useMutation(mutationOptions);
    }
    

export const getCreateProductResponseMock = (overrideResponse: Partial< Product > = {}): Product => ({__v: faker.number.int({min: undefined, max: undefined}), _id: faker.string.alpha(20), categoryIds: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), description: faker.string.alpha(20), imageUrl: faker.string.alpha(20), name: faker.string.alpha(20), price: faker.number.int({min: undefined, max: undefined}), ...overrideResponse})

export const getGetProductsResponseMock = (): Product[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({__v: faker.number.int({min: undefined, max: undefined}), _id: faker.string.alpha(20), categoryIds: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), description: faker.string.alpha(20), imageUrl: faker.string.alpha(20), name: faker.string.alpha(20), price: faker.number.int({min: undefined, max: undefined})})))

export const getGetProductResponseMock = (overrideResponse: Partial< Product > = {}): Product => ({__v: faker.number.int({min: undefined, max: undefined}), _id: faker.string.alpha(20), categoryIds: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), description: faker.string.alpha(20), imageUrl: faker.string.alpha(20), name: faker.string.alpha(20), price: faker.number.int({min: undefined, max: undefined}), ...overrideResponse})

export const getUpdateProductResponseMock = (overrideResponse: Partial< Product > = {}): Product => ({__v: faker.number.int({min: undefined, max: undefined}), _id: faker.string.alpha(20), categoryIds: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), description: faker.string.alpha(20), imageUrl: faker.string.alpha(20), name: faker.string.alpha(20), price: faker.number.int({min: undefined, max: undefined}), ...overrideResponse})

export const getDeleteProductResponseMock = (overrideResponse: Partial< Product > = {}): Product => ({__v: faker.number.int({min: undefined, max: undefined}), _id: faker.string.alpha(20), categoryIds: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.string.alpha(20))), description: faker.string.alpha(20), imageUrl: faker.string.alpha(20), name: faker.string.alpha(20), price: faker.number.int({min: undefined, max: undefined}), ...overrideResponse})

export const getUploadProductImageResponseMock = (overrideResponse: Partial< UploadProductImage200 > = {}): UploadProductImage200 => ({imageUrl: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), ...overrideResponse})


export const getCreateProductMockHandler = (overrideResponse?: Product | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<Product> | Product)) => {
  return http.post('*/products', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getCreateProductResponseMock()),
      { status: 201,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetProductsMockHandler = (overrideResponse?: Product[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Product[]> | Product[])) => {
  return http.get('*/products', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProductsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetProductMockHandler = (overrideResponse?: Product | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Product> | Product)) => {
  return http.get('*/products/:id', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProductResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateProductMockHandler = (overrideResponse?: Product | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<Product> | Product)) => {
  return http.put('*/products/:id', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getUpdateProductResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getDeleteProductMockHandler = (overrideResponse?: Product | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<Product> | Product)) => {
  return http.delete('*/products/:id', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getDeleteProductResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUploadProductImageMockHandler = (overrideResponse?: UploadProductImage200 | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<UploadProductImage200> | UploadProductImage200)) => {
  return http.post('*/products/:id/image', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getUploadProductImageResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}
export const getProductsMock = () => [
  getCreateProductMockHandler(),
  getGetProductsMockHandler(),
  getGetProductMockHandler(),
  getUpdateProductMockHandler(),
  getDeleteProductMockHandler(),
  getUploadProductImageMockHandler()
]
