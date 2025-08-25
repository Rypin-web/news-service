import {createSlice} from "@reduxjs/toolkit";
import {supportedLocales, type TLocale, type TLocaleStructure, translations} from "./data.ts";
import {getBrowserLocale} from "../../utils/getBrowserLocale.ts";

type TPayloadChangeLocale = {
    payload: TLocale
}

type TInitialState = {
    locale: TLocale,
    translations: Partial<TLocaleStructure<TLocale>>
}

const initialLocale = getBrowserLocale()
const initialState: TInitialState = {
    locale: initialLocale,
    translations: translations[initialLocale]
}

export const localeSlice = createSlice({
    name: 'localeSlice',
    initialState,
    reducers: {
        changeLocale: (state: TInitialState, {payload}: TPayloadChangeLocale) => {
            if (supportedLocales.includes(payload)) {
                state.locale = payload
                state.translations = translations[payload]
            }
        }
    }
})