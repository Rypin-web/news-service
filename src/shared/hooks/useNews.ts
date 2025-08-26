import {useTypedSelector} from "./useTypedSelector.ts";
import {useNewsParams} from "./useNewsParams.ts";
import {useEverythingQuery, useTopHeadlinesQuery} from "../../entities/news/newsApi.ts";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {newsParamsSlice} from "../slices/newsParams/newsParamsSlice.ts";
import {skipToken} from "@reduxjs/toolkit/query";

export function useNews() {
    const dispatch = useDispatch()
    const activeEndpoint = useTypedSelector((state) => (state.newsParams.activeEndPoint))
    const {params: paramsEverything} = useNewsParams('everything')
    const {params: paramsTopHeadlines} = useNewsParams('topHeadlines')
    const responseEverything = useEverythingQuery(
        activeEndpoint === 'everything' ? paramsEverything : skipToken
    )
    const responseTopHeadlines = useTopHeadlinesQuery(
        activeEndpoint === 'topHeadlines' ? paramsTopHeadlines : skipToken
    )
    const setEndpoint = useCallback((endpoint: 'everything' | 'topHeadlines') => {
        dispatch(newsParamsSlice.actions.setActiveEndpoint(endpoint))
    }, [dispatch])
    return {
        activeEndpoint,
        setEndpoint,
        response: activeEndpoint === 'everything' ? responseEverything : responseTopHeadlines,
    }
}