import cl from './NewsItem.module.css'
import type {TNewsApiArticles} from "../../entities/news/newsapi.types.ts";
import {useTranslations} from "../../shared/hooks/useTranslations.ts";

type TNewsItemProps = {
    data: TNewsApiArticles
}

function NewsItem(p: TNewsItemProps) {
    const uiData = useTranslations()
    const hasImage = p.data.urlToImage && p.data.urlToImage !== '';

    return (
        <article className={cl.newsItem}>
            <div className={`${cl.imageContainer} ${!hasImage ? cl.noImage : ''}`}>
                {hasImage ? (
                    <img
                        src={p.data.urlToImage}
                        alt=''
                        loading='lazy'
                    />
                ) : (
                    <span>{uiData.news_card_image_not_found}</span>
                )}
            </div>
            <div className={cl.content}>
                <h3 className={cl.title}>{p.data.title}</h3>
                {p.data.description && (
                    <p className={cl.description}>{p.data.description}</p>
                )}
                <a
                    href={p.data.url}
                    className={cl.readLink}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {uiData.news_card_read_more}
                </a>
            </div>
        </article>
    );
}

export {NewsItem};