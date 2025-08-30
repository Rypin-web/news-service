import {useNewsParams} from "../../shared/hooks/useNewsParams.ts";
import Link from "../../shared/UI/Link/Link.tsx";

type TSwitchPageProps = {
    endpoint: 'everything' | 'topHeadlines',
    totalResults: number
}

function SwitchPage(p: TSwitchPageProps) {
    let totalPages: number = 0
    const {page, pageSize} = useNewsParams(p.endpoint).params
    if (typeof pageSize !== 'undefined' && typeof page !== 'undefined')
        totalPages = Math.round(p.totalResults / pageSize)

    return (
        <div>
            {totalPages > 0 &&
                new Array(totalPages).fill(0).map((_, i) =>
                    (<span>
                        <Link href={'#'}>{i + 1}{i === page && '+'}</Link>
                    </span>))
            }
        </div>
    );
}

export {SwitchPage};