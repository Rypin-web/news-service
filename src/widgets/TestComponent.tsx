import {useRef} from "react";
import {useNewsParams} from "../shared/hooks/useNewsParams.ts";
import {useNews} from "../shared/hooks/useNews.ts";


function TestComponent() {
    const input = useRef<HTMLInputElement>(null)
    const {activeEndpoint, setEndpoint, response} = useNews()
    const {params, setParams} = useNewsParams(activeEndpoint)

    const handleClickChangeSearchParams = (input: string) => {
        setEndpoint(activeEndpoint)
        setParams({...params, q: input}, 'everything')
        setParams({...params, q: input}, 'topHeadlines')
        console.log('useNews', activeEndpoint, setEndpoint, response)
        console.log('useNewsParams', params, setParams)
    }

    return (
        <div>
            <input type='search' ref={input} />
            <button onClick={() => handleClickChangeSearchParams(input.current === null ? '' : input.current.value)}>search</button>
            <button onClick={() => setEndpoint('everything')}>everything</button>
            <button onClick={() => setEndpoint('topHeadlines')}>topHeadlines</button>

            <div>
                <h3>titles</h3>
                {response.isLoading && <p>Loading...</p>}
                {response.error && <p>error</p>}
                {response.data && response.data.articles.map((e) => (<h2>{e.title}</h2>))}
            </div>
        </div>
    );
}

export {TestComponent};