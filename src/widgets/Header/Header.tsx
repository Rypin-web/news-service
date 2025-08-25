import cl from './Header.module.css'
import Link from "../../shared/UI/Link/Link.tsx";
import Locale from "../../features/Locale/Locale.tsx";
import {ToggleTheme} from "../../features/ToggleTheme/ToggleTheme.tsx";
import {useTranslations} from "../../shared/hooks/useTranslations.ts";

function Header() {
    const uiData = useTranslations()

    return (
        <header className={cl.header}>
            <Link href={'#'}><h2>{uiData.logo}</h2></Link>
            {/*search*/}
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