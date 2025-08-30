import {createSlice} from "@reduxjs/toolkit";
import type {TNewsEverythingParams, TNewsHeadlinesParams} from "../../../entities/news/newsapi.types.ts";
import {getBrowserLocale} from "../../utils/getBrowserLocale.ts";

type TInitialState = {
    activeEndPoint: 'everything' | 'topHeadlines'
    everything: TNewsEverythingParams,
    topHeadlines: TNewsHeadlinesParams
}

const initialState: TInitialState = {
    activeEndPoint: 'everything',
    everything: {
        q: 'bitcoin',
        searchIn: '',
        sortBy: 'publishedAt',
        sources: '',
        domains: '',
        excludeDomains: '',
        from: '',
        to: '',
        language: getBrowserLocale(),
        page: 1,
        pageSize: 10
    },
    topHeadlines: {
        q: 'bitcoin',
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