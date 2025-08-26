import cl from './Header.module.css'
import Link from "../../shared/UI/Link/Link.tsx";
import Locale from "../../features/Locale/Locale.tsx";
import {ToggleTheme} from "../../features/ToggleTheme/ToggleTheme.tsx";
import {useTranslations} from "../../shared/hooks/useTranslations.ts";
import {useNewsParams} from "../../shared/hooks/useNewsParams.ts";
import {useTopHeadlinesQuery} from "../../entities/news/newsApi.ts";
import {useRef} from "react";

function Header() {
    const uiData = useTranslations()
    const {params, setParams} = useNewsParams('topHeadlines')
    const {data} = useTopHeadlinesQuery(params)
    const input = useRef<HTMLInputElement>(null)

    const search = () => {
        setParams({...params, q:input.current?.value})
    }

    console.log(data)

    return (
        <header className={cl.header}>
            <Link href={'#'}><h2>{uiData.logo}</h2></Link>
            {/*search*/}
            <input type='search' ref={input}/>
            <button onClick={search}>search</button>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className={cl.headerContainer}>
                <Locale />
                <ToggleTheme />
            </div>
        </header>
    );
}

export default Header;