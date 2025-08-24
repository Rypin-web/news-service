import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {TNewsApiResponse, TNewsEverythingParams, TNewsHeadlinesParams} from "./newsapi.types.ts";

const API_URL = 'https://newsapi.org/v2'
const API_KEY = import.meta.env.VITE_NEWS_API

export const newsApi = createApi({
    reducerPath: 'newsApi',
    tagTypes: ['news'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: (build) => ({
        everything: build.query<TNewsApiResponse, TNewsEverythingParams>({
            query: (params) => ({
                url:'/everything',
                params:{
                    ...params,
                    apiKey:API_KEY
                }
            })
        }),
        topHeadlines: build.query<TNewsApiResponse, TNewsHeadlinesParams>({
            query: (params) => ({
                url:'/top-headlines',
                params:{
                    ...params,
                    apiKey: API_KEY
                }
            })
        })
    })
})

export const {useEverythingQuery, useTopHeadlinesQuery} = newsApi