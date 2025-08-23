import {NewsApiService} from "../entities/news/api/newsApiService.ts";
import {useEffect, useState} from "react";
import type {TNewsApiArticles} from "../entities/news/api/newsapi.types.ts";
import Container from "./Container/Container.tsx";
import Link from "../shared/UI/Link/Link.tsx";
import Header from "../widgets/Header/Header.tsx";

function App() {
    document.documentElement.setAttribute('data-theme', 'dark')

    const [newsData, setNewsData] = useState<TNewsApiArticles[]>([])

    // useEffect(() => {
    //     NewsApiService.topHeadlines({q: 'trump'}).then((data) => {
    //         if (data.status === 'ok') setNewsData(data.articles)
    //         else console.log(data)
    //     })
    // }, [])

    return (
        <>
            <Header></Header>
            <Container>
                <Link href={newsData.length > 0 ? newsData[0].url : '#'}>
                    {newsData.length > 0 ? newsData[0].title : 'Loading...'}
                </Link>
            </Container>
        </>
    )
}

export default App
