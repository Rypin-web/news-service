import type {TNewsApiResponse, TNewsHeadlinesParams} from "./newsapi.types.ts";
import axios from "axios";

const apikey:string = import.meta.env.VITE_NEWS_API
const baseUrl = 'https://newsapi.org/'

export class NewsApiService {
    static topHeadlines (params:TNewsHeadlinesParams) {
        const url = 'v2/top-headlines'

        return axios.get(baseUrl + url, {
            params:{
                ...params,
                apikey:apikey
            }
        }).then((response) => response.data as TNewsApiResponse)

    }
}