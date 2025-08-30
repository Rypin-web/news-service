import cl from './PageButton.module.css'

type TPageButtonProps = {
    handle: (i:number) => void,
    isActive: boolean
    page: number
}

function PageButton(p:TPageButtonProps) {
    return (
        <button onClick={()=>p.handle((p.page))} className={`${cl.pageButton} ${p.isActive && cl.pageButtonActive}`}>
            {p.page}
        </button>
    );
}

export {PageButton};