export type TNewsHeadlinesParams = {
    country?: string,
    category?: string,
    sources?: string,
    q?: string,
    pageSize?: number,
    page?: number
}

export type TNewsApiResponse = {
    status: 'ok' | 'error' | '',
    totalResults: number,
    articles: TNewsApiArticles[]
}

export type TNewsApiArticles = {
    source: string,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

export type TNewsEverythingParams = {
    q?: string,
    searchIn?: string,
    sources?: string,
    domains?: string,
    excludeDomains?: string,
    from?: string,
    to?: string,
    language?: 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh',
    sortBy?: 'relevancy' | 'popularity' | 'publishedAt',
    pageSize?: number,
    page?: number
}