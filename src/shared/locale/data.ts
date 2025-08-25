export const translations = {
    en: {
        logo:'NEWS',
        input_placeholder_search:'Search..',
        locale_select_title:'Choose language',
        tab_title: 'News service'
    },
    ru:{
        logo:'НОВОСТИ',
        input_placeholder_search:'Поиск..',
        locale_select_title:'Выберите язык',
        tab_title: 'Сервис новостей'
    }
} as const

export type TLocale = keyof typeof translations
export type TLocaleStructure<T extends TLocale> = (typeof translations)[T]
export const defaultLocale: TLocale = 'en'
export const supportedLocales = Object.keys(translations) as TLocale[]