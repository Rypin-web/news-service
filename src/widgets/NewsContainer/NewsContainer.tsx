import cl from './NewsContainer.module.css'
import {useNews} from "../../shared/hooks/useNews.ts";
import {NewsItem} from "../NewsItem/NewsItem.tsx";
import {SwitchPage} from "../SwitchPage/SwitchPage.tsx";
import {SwitchNewsEndpoint} from "../SwitchNewsEndpoint/SwitchNewsEndpoint.tsx";

function NewsContainer() {
    const {activeEndpoint, setEndpoint, response} = useNews()
    if (response.error) console.warn(response)

    return (
        <>
            <SwitchNewsEndpoint endpoint={activeEndpoint} switch={setEndpoint} />
            <div className={cl.newsContainer}>
                {response.isLoading && <h2>Loading..</h2>}
                {response.isSuccess && response.data.articles.length > 0 ?
                    response.data.articles.map((e) => <NewsItem data={e} key={e.title} />)
                    : <h3>Ничего не найдено</h3>
                }
            </div>
            {response.isSuccess && response.data.articles.length > 0 &&
              <SwitchPage endpoint={activeEndpoint} totalResults={response.data.totalResults} />
            }
        </>
    );
}

export {NewsContainer};