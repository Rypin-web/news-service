import cl from './Header.module.css'
import Link from "../../shared/UI/Link/Link.tsx";
import Locale from "../../features/Locale/Locale.tsx";

function Header() {
    return (
        <header className={cl.header}>
            <Link href={'#'}><h2>NEWS</h2></Link>
            <Locale></Locale>
            {/*<>search</>*/}
            {/*<>change theme</>*/}
            {/*<>change locale</>*/}
        </header>
    );
}

export default Header;