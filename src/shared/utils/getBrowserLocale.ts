import {defaultLocale, supportedLocales, type TLocale} from "../locale/data.ts";

export function getBrowserLocale (): TLocale {
    const browserLocale = navigator.language.split('-')[0] as TLocale
    return supportedLocales.includes(browserLocale) ? browserLocale : defaultLocale
}