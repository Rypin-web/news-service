import {configureStore} from "@reduxjs/toolkit";
import {newsApi} from "../entities/news/newsApi.ts";

export const store = configureStore({
    reducer: {
        [newsApi.reducerPath] : newsApi.reducer
    },
    middleware: (gDM) =>
        gDM().concat(newsApi.middleware)
})

