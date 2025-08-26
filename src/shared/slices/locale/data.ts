export const translations = {
    en: {
        logo:'NEWS',
        locale_select_title:'Choose language',
        tab_title: 'News service',
        input_search_placeholder: 'Enter something..',
        input_search_button: 'Search'
    },
    ru:{
        logo:'НОВОСТИ',
        locale_select_title:'Выберите язык',
        tab_title: 'Сервис новостей',
        input_search_placeholder: 'Напишите что-то..',
        input_search_button: 'Искать'
    }
} as const

export type TLocale = keyof typeof translations
export type TLocaleStructure<T extends TLocale> = (typeof translations)[T]
export const defaultLocale: TLocale = 'en'
export const supportedLocales = Object.keys(translations) as TLocale[]