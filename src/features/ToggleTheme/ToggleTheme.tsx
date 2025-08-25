import {useCallback} from "react";
import {IconButton} from "../../shared/UI/IconButton/IconButton.tsx";

function ToggleTheme() {
    const toggleTheme = useCallback(()=>{
        const currentTheme = document.documentElement.getAttribute('data-theme')
        document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'white' : 'dark')
    }, [])

    return (
        <IconButton name={'changeTheme'} handleClick={toggleTheme} w={30} h={30} />
    );
}

export {ToggleTheme};