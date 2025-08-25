import cl from './IconButton.module.css'
import {Icon, type TIconProps} from "../Icon/Icon.tsx";

type TIconButtonProps = TIconProps & {
    handleClick?: () => void
}

function IconButton(p: TIconButtonProps) {
    return (
        <button onClick={p?.handleClick} className={cl.iconButton}>
            <Icon name={p.name} w={p.w} h={p.h} />
        </button>
    );
}

export {IconButton};