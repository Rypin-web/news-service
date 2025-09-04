import cl from './Filters.module.css'

type TFiltersProps = {
    close: (arg: boolean) => void
}

function Filters(p: TFiltersProps) {

    return (
        <div className={cl.filters}>
            <div className={cl.filters_inner}>
                <button className={cl.buttonClose} onClick={() => p.close(false)}>Close</button>
                <h1>work</h1>
            </div>
        </div>
    );
}

export {Filters};