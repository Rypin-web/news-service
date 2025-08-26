import {useDispatch} from "react-redux";
import {useTypedSelector} from "./useTypedSelector.ts";
import {useCallback} from "react";
import {newsParamsSlice} from "../slices/newsParams/newsParamsSlice.ts";
import type {TNewsEverythingParams, TNewsHeadlinesParams} from "../../entities/news/newsapi.types.ts";

export function useNewsParams<T extends 'everything' | 'topHeadlines'>(key: T) {
    const dispatch = useDispatch()
    const params = useTypedSelector((state) => state.newsParams[key])
    const setParams = useCallback(
        (params: T extends 'everything' ? TNewsEverythingParams : TNewsHeadlinesParams) => {
        if (key === 'everything') dispatch(newsParamsSlice.actions.setEverythingParams(params as TNewsEverythingParams))
        if (key === 'topHeadlines') dispatch(newsParamsSlice.actions.setTopHeadlinesParams(params))
    }, [dispatch, key])

    return {params, setParams}
}