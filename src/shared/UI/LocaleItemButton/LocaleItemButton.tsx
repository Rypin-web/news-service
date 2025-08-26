import cl from './LocaleItemButton.module.css'
import type {ReactNode} from "react";
import type {TLocale} from "../../slices/locale/data.ts";
import {useNews} from "../../hooks/useNews.ts";
import {useNewsParams} from "../../hooks/useNewsParams.ts";

type TLocaleItemButtonProps = {
    children:ReactNode,
    currentLocale:TLocale
    changeLocale: (arg: TLocale) => void,
    setState: () => void,
}

function LocaleItemButton(p:TLocaleItemButtonProps) {
    const {activeEndpoint} = useNews()
    const {params,setParams} = useNewsParams(activeEndpoint)

    return (
        <button onClick={()=>{
            p.changeLocale(p.children as TLocale)
            setParams({...params, language: p.children as TLocale})
            p.setState()
        }}
            key={p.children as string}
            className={`${cl.localeItem} ${p.children === p.currentLocale ? cl.localeItemActive : ''}`}
        >
            {p.children}
        </button>
    );
}

export {LocaleItemButton};