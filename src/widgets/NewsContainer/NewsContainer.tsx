import cl from './NewsContainer.module.css'
import {useNews} from "../../shared/hooks/useNews.ts";
import {NewsItem} from "../NewsItem/NewsItem.tsx";

function NewsContainer() {
    const {response} = useNews()
    if (response.error) console.warn(response)

    return (
        <div className={cl.newsContainer}>
            {response.isLoading && <h2>Loading..</h2>}
            {response.isSuccess && response.data.articles.length > 0 ?
                response.data.articles.map((e) => <NewsItem data={e} key={e.title} />)
                : <h3>Ничего не найдено</h3>
            }
        </div>
    );
}

export {NewsContainer};