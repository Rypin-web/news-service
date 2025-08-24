import {configureStore} from "@reduxjs/toolkit";
import {newsApi} from "../entities/news/newsApi.ts";
import {localeSlice} from "../shared/locale/localeSlice.ts";

export const store = configureStore({
    reducer: {
        locale:localeSlice.reducer,
        [newsApi.reducerPath] : newsApi.reducer
    },
    middleware: (gDM) =>
        gDM().concat(newsApi.middleware)
})

export type TRootState = ReturnType<typeof store.getState>