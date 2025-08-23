export type TNewsHeadlinesParams = {
    country?: string,
    category?: string,
    sources?: string,
    q?: string,
    pageSize?: number,
    page?: number
}

export type TNewsApiResponse = {
    status: 'ok' | 'error',
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