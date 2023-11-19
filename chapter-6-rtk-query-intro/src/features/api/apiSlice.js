import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query({   // An endpoint definition that retrieves data, and may provide tags to the cache.
            query: () => ({
                url: '/todos',
            }),
            providesTags: ['Todos']
        })
    })
})

export const { useGetTodosQuery } = apiSlice