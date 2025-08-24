export const translations = {
    en: {
        logo:'NEWS',
        input_placeholder_search:'Search..',
    },
    ru:{
        logo:'НОВОСТИ',
        input_placeholder_search:'Поиск..'
    }
} as const

export type TLocale = keyof typeof translations
export type TLocaleStructure<T extends TLocale> = (typeof translations)[T]
export const defaultLocale: TLocale = 'en'
export const supportedLocales = Object.keys(translations) as TLocale[]