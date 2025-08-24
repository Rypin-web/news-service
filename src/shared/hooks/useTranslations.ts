import {useTypedSelector} from "./useTypedSelector.ts";

export function useTranslations() {
    return useTypedSelector((state) => (state.locale.translations))
}