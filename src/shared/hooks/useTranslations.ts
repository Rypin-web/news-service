import {useTypedSelector} from "./useTypedSelector.ts";
import type {TLocaleStructure} from "../slices/locale/data.ts";

export function useTranslations():TLocaleStructure {
    return useTypedSelector((state) => (state.locale.translations))
}