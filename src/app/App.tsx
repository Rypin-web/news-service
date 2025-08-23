import {NewsApiService} from "../entities/news/api/newsApiService.ts";
import {useEffect, useState} from "react";
import type {TNewsApiArticles} from "../entities/news/api/newsapi.types.ts";
import Container from "./Container/Container.tsx";
import Link from "../shared/UI/Link/Link.tsx";

function App() {
    document.documentElement.setAttribute('data-theme', 'light')

    const [newsData, setNewsData] = useState<TNewsApiArticles[]>([])

    // useEffect(()=>{
    //     NewsApiService.topHeadlines({q: 'trump'}).then((data) => {
    //         if(data.status === 'ok') setNewsData(data.articles)
    //         else console.log(data)
    //     })
    // }, [])

    return (
        <>
            {newsData.length > 0 ? <h1>newsData[0].title</h1> : <p>'data not found'</p>}
            <Container><Link href={'#'}>123</Link></Container>
        </>
    )
}

export default App
