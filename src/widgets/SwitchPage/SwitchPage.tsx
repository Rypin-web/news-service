import {useNewsParams} from "../../shared/hooks/useNewsParams.ts";
import cl from './SwitchPage.module.css'
import {useCallback} from "react";
import {PageButton} from "../../shared/UI/PageButton/PageButton.tsx";

type TSwitchPageProps = {
    endpoint: 'everything' | 'topHeadlines',
    totalResults: number
}

function SwitchPage(p: TSwitchPageProps) {
    let totalPages: number = 0
    const {params, setParams} = useNewsParams(p.endpoint)
    const {pageSize, page} = params
    if (typeof pageSize !== 'undefined' && typeof page !== 'undefined')
        totalPages = Math.round(p.totalResults / pageSize)

    const switchPage = useCallback((i: number) => {
        if (i === page) return
        setParams({...params, page: i})
    }, [page])

    return (
        <div className={cl.switchPageContainer}>
            {totalPages > 0 &&
                new Array(totalPages).fill(0).map((_, i) =>
                    (
                        <PageButton handle={switchPage} isActive={i + 1 === page} page={i + 1} />
                    ))
            }
        </div>
    );
}

export {SwitchPage};