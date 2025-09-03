import cl from './Header.module.css'
import Link from "../../shared/UI/Link/Link.tsx";
import Locale from "../../features/Locale/Locale.tsx";
import {ToggleTheme} from "../../features/ToggleTheme/ToggleTheme.tsx";
import {useTranslations} from "../../shared/hooks/useTranslations.ts";
import {SearchNews} from "../SearchNews/SearchNews.tsx";

function Header() {
    const uiData = useTranslations()

    return (
        <header className={cl.header}>
            <div className={cl.headerInner}>
                <Link href={'#'}><h2>{uiData.logo}</h2></Link>
                <SearchNews />
                <div></div>
                <div></div>
                <div></div>
                <div className={cl.headerContainer}>
                    <Locale />
                    <ToggleTheme />
                </div>
            </div>
        </header>
    );
}

export default Header;