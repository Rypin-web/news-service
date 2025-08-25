import {configureStore} from "@reduxjs/toolkit";
import {newsApi} from "../entities/news/newsApi.ts";
import {localeSlice} from "../shared/slices/locale/localeSlice.ts";
import {newsParamsSlice} from "../shared/slices/newsParams/newsParamsSlice.ts";

export const store = configureStore({
    reducer: {
        locale:localeSlice.reducer,
        newsParams: newsParamsSlice.reducer,
        [newsApi.reducerPath] : newsApi.reducer
    },
    middleware: (gDM) =>
        gDM().concat(newsApi.middleware)
})

export type TRootState = ReturnType<typeof store.getState>