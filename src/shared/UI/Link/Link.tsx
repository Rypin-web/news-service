import type {TLinkProps} from "./Link.type.ts";
import cl from './Link.module.css'

function Link(p:TLinkProps) {
    return (
        <a href={p.href} className={cl.link}>
            {p.children}
        </a>
    );
}

export default Link;