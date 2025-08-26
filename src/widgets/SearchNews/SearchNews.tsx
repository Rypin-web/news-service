import cl from './SearchNews.module.css'
import {IconButton} from "../../shared/UI/IconButton/IconButton.tsx";
import {useRef} from "react";
import {useNews} from "../../shared/hooks/useNews.ts";
import {useNewsParams} from "../../shared/hooks/useNewsParams.ts";
import {useTranslations} from "../../shared/hooks/useTranslations.ts";

function SearchNews() {
    const searchRef = useRef<HTMLInputElement>(null)
    const {activeEndpoint, setEndpoint} = useNews()
    const uiData = useTranslations()
    const {params, setParams} = useNewsParams(activeEndpoint)

    const handleClickChangeSearchParams = (input: string) => {
        setEndpoint(activeEndpoint)
        setParams({...params, q: input}, 'everything')
        setParams({...params, q: input}, 'topHeadlines')
    }

    return (
        <form className={cl.searchForm}>
            <input type='search' ref={searchRef} className={cl.searchInput} placeholder={uiData.input_search_placeholder} />
            <IconButton
                handleClick={(e) => {
                    e.preventDefault()
                    handleClickChangeSearchParams(searchRef.current !== null ? searchRef.current.value : '')
                }}
                type={'submit'} name={'search'}
                className={cl.searchButton}
                w={20}
                h={20}
            >
                {uiData.input_search_button}
            </IconButton>
        </form>
    );
}

export {SearchNews};