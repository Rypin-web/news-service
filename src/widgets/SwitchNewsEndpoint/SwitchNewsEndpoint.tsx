import cl from './SwitchNewsEndpoint.module.css'

type TSwitchNewsEndpointProps = {
    endpoint: "everything" | "topHeadlines",
    switch: (newEndpoint: "everything" | "topHeadlines") => void
}

function SwitchNewsEndpoint(p: TSwitchNewsEndpointProps) {
    const isEverything = p.endpoint === 'everything'
    const isTop = p.endpoint === 'topHeadlines'

    return (
        <div className={cl.switch}>
            <p className={cl.current}>{p.endpoint}</p>

            <button
                className={`${cl.endpointButton} ${isEverything ? cl.endpointButtonActive : ''}`}
                onClick={() => p.switch('everything')}
            >
                Everything
            </button>

            <button
                className={`${cl.endpointButton} ${isTop ? cl.endpointButtonActive : ''}`}
                onClick={() => p.switch('topHeadlines')}
            >
                Top Headlines
            </button>
        </div>
    );
}

export { SwitchNewsEndpoint };