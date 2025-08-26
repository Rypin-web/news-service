import {createSlice} from "@reduxjs/toolkit";
import type {TNewsEverythingParams, TNewsHeadlinesParams} from "../../../entities/news/newsapi.types.ts";

type TInitialState = {
    activeEndPoint: 'everything' | 'topHeadlines'
    everything: TNewsEverythingParams,
    topHeadlines: TNewsHeadlinesParams
}

const initialState: TInitialState = {
    activeEndPoint: 'topHeadlines',
    everything: {
        q: '',
        searchIn: '',
        sortBy: 'publishedAt',
        sources: '',
        domains: '',
        excludeDomains: '',
        from: '',
        to: '',
        language: 'en',
        page: 1,
        pageSize: 10
    },
    topHeadlines: {
        q: '',
        country: '',
        category: '',
        sources: '',
        page: 1,
        pageSize: 10,
    }
}

export const newsParamsSlice = createSlice({
    name: 'newsParams',
    initialState,
    reducers: {
        setEverythingParams: (state, {payload}: { payload: TNewsEverythingParams }) => {
            state.everything = payload
        },
        setTopHeadlinesParams: (state, {payload}: { payload: TNewsHeadlinesParams }) => {
            state.topHeadlines = payload
        },
        setActiveEndpoint: (state, {payload}: {payload:TInitialState['activeEndPoint']}) => {
            state.activeEndPoint = payload
        }
    }
})