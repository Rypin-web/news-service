import cl from './SwitchNewsEndpoint.module.css'
import {useTranslations} from "../../shared/hooks/useTranslations.ts";

type TSwitchNewsEndpointProps = {
    endpoint: "everything" | "topHeadlines",
    switch: (newEndpoint: "everything" | "topHeadlines") => void
}

function SwitchNewsEndpoint(p: TSwitchNewsEndpointProps) {
    const uiData = useTranslations()
    const isEverything = p.endpoint === 'everything'
    const isTop = p.endpoint === 'topHeadlines'

    return (
        <div className={cl.switch}>
            <p className={cl.current}>{p.endpoint}</p>

            <button
                className={`${cl.endpointButton} ${isEverything ? cl.endpointButtonActive : ''}`}
                onClick={() => p.switch('everything')}
            >
                {uiData.switch_news_endpoint_button_everything}
            </button>

            <button
                className={`${cl.endpointButton} ${isTop ? cl.endpointButtonActive : ''}`}
                onClick={() => p.switch('topHeadlines')}
            >
                {uiData.switch_news_endpoint_button_top_headlines}
            </button>
        </div>
    );
}

export { SwitchNewsEndpoint };