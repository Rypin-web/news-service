import {useDispatch} from "react-redux";
import {useTypedSelector} from "./useTypedSelector.ts";
import {localeSlice} from "../slices/locale/localeSlice.ts";
import type {TLocale} from "../slices/locale/data.ts";
import {useCallback} from "react";

export function useLocale() {
    const dispatch = useDispatch()
    const locale = useTypedSelector(state => state.locale.locale)

    const changeLocale = useCallback((newLocale: TLocale) => {
        dispatch(localeSlice.actions.changeLocale(newLocale))
    }, [dispatch])

    return {locale, changeLocale}
}