import cl from './LocaleItemButton.module.css'
import type {ReactNode} from "react";
import type {TLocale} from "../../locale/data.ts";

type TLocaleItemButtonProps = {
    children:ReactNode,
    currentLocale:TLocale
    changeLocale: (arg: TLocale) => void,
    setState: () => void,
}

function LocaleItemButton(p:TLocaleItemButtonProps) {
    return (
        <button onClick={()=>{
            p.changeLocale(p.children as TLocale)
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