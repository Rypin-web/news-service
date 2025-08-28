import cl from './NewsContainer.module.css'
import {useNews} from "../../shared/hooks/useNews.ts";
import {NewsItem} from "../NewsItem/NewsItem.tsx";

function NewsContainer() {
    const {response} = useNews()
    if (response.error) console.log(response)

    return (
        <div className={cl.newsContainer}>
            {response.isLoading && <h2>Loading..</h2>}
            {response.isSuccess &&
                response.data.articles.map((e) => <NewsItem data={e} key={e.title} />)
            }
        </div>
    );
}

export {NewsContainer};