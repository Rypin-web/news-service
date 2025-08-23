import {createSlice} from "@reduxjs/toolkit";
import type {TNewsApiResponse} from "./api/newsapi.types.ts";

const initialState: Partial<TNewsApiResponse> = {
    status: '',
    totalResults: 0,
    articles: []
}

const newsSlice = createSlice({
    name:'newsSlice',
    initialState,
    reducers: {}
})

export const newsActions = newsSlice.actions
export const newsReducer = newsSlice.reducer