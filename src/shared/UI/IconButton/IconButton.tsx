import cl from './IconButton.module.css'
import {Icon, type TIconProps} from "../Icon/Icon.tsx";
import {type FormEvent, type ReactNode} from "react";

type TIconButtonProps = TIconProps & {
    children?: ReactNode
    className?: string,
    type?: "button" | "submit" | "reset",
    handleClick?: (e: FormEvent<HTMLButtonElement>) => void,
}

function IconButton(p: TIconButtonProps) {
    return (
        <button type={p.type ? p.type : 'button'} onClick={p?.handleClick} className={`${cl.iconButton} ${p.className}`}>
            {p.children && p.children}
            <Icon name={p.name} w={p.w} h={p.h} />
        </button>
    );
}

export {IconButton};