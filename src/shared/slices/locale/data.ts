export const translations = {
    en: {
        logo:'NEWS',
        locale_select_title:'Choose language',
        tab_title: 'News service',
        input_search_placeholder: 'Enter something..',
        input_search_button: 'Search',
        news_request_loading: 'Loading..',
        news_request_error: 'Nothing not found',
        switch_news_endpoint_button_everything: 'Everything',
        switch_news_endpoint_button_top_headlines: 'Top headlines',
        news_card_image_not_found: 'No image available',
        news_card_read_more: 'Read more'
    },
    ru:{
        logo:'НОВОСТИ',
        locale_select_title:'Выберите язык',
        tab_title: 'Сервис новостей',
        input_search_placeholder: 'Напишите что-то..',
        input_search_button: 'Искать',
        news_request_loading: 'Загрузка..',
        news_request_error: 'Ничего не найдено',
        switch_news_endpoint_button_everything: 'Все новости',
        switch_news_endpoint_button_top_headlines: 'Топ-хедлайны',
        news_card_image_not_found: 'Изображение отсутствует',
        news_card_read_more: 'Подробнее'
    }
} as const

export type TLocale = keyof typeof translations
export type TLocaleStructure = (typeof translations)['en']
export const defaultLocale: TLocale = 'en'
export const supportedLocales = Object.keys(translations) as TLocale[]