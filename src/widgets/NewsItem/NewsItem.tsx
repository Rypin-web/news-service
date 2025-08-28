import cl from './NewsItem.module.css'
import type {TNewsApiArticles} from "../../entities/news/newsapi.types.ts";

type TNewsItemProps = {
    data: TNewsApiArticles
}

function NewsItem(p: TNewsItemProps) {
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
                    <span>No image available</span>
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
                    Read more →
                </a>
            </div>
        </article>
    );
}

export {NewsItem};