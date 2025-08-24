import cl from './ToggleTheme.module.css'
import {useCallback} from "react";
import {Icon} from "../../shared/UI/Icon/Icon.tsx";

function ToggleTheme() {
    const toggleTheme = useCallback(()=>{
        const currentTheme = document.documentElement.getAttribute('data-theme')
        document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'white' : 'dark')
    }, [])

    return (
        <button onClick={toggleTheme} className={cl.toggleThemeButton}>
            <Icon name={'changeTheme'} w={50} h={50} />
        </button>
    );
}

export {ToggleTheme};