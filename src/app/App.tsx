import Home from "../pages/Home.tsx";
import {useTranslations} from "../shared/hooks/useTranslations.ts";

function App() {
    const uiData = useTranslations()
    document.documentElement.setAttribute('data-theme', 'dark')
    document.title = uiData.tab_title ? uiData.tab_title : 'Loading..'

    return (
        <>
            <Home></Home>
        </>
    )
}

export default App
