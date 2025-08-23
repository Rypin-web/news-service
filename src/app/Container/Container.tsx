import {type ReactNode} from 'react';
import cl from './Container.module.css'

function Container({children}:{children:ReactNode}) {
    return (
        <div className={cl.container}>{children}</div>
    );
}

export default Container;