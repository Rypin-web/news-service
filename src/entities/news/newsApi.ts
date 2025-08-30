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
            query: (params) => {
                const neededParams = {...params} as TNewsEverythingParams

                Object.keys(neededParams).forEach((e )=>{
                    const key = e as keyof TNewsEverythingParams
                    if(typeof neededParams[key] !== 'undefined' && neededParams[key] === '' || neededParams[key] == null)
                        delete neededParams[key]
                })

                return {
                    url:'/everything',
                    params:{
                        ...neededParams,
                        apiKey:API_KEY
                    }
                }
            }
        }),
        topHeadlines: build.query<TNewsApiResponse, TNewsHeadlinesParams>({
            query: (params) => {
                const neededParams = {...params} as TNewsHeadlinesParams

                Object.keys(neededParams).forEach((e )=>{
                    const key = e as keyof TNewsHeadlinesParams
                    if(typeof neededParams[key] !== 'undefined' && neededParams[key] === '' || neededParams[key] == null)
                        delete neededParams[key]
                })

                return {
                    url:'/top-headlines',
                    params:{
                        ...neededParams,
                        apiKey: API_KEY
                    }
                }
            }
        })
    })
})

export const {useEverythingQuery, useTopHeadlinesQuery} = newsApi