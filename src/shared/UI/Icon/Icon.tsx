import {iconsData} from "./IconsData.ts";

export type TIconProps = {
    name: keyof typeof iconsData,
    w?:number,
    h?:number,
}

function Icon({name, w = 24, h = 24}:TIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={h} viewBox="0 -960 960 960" width={w} fill='inherit'>
            <path d={iconsData[name]}/>
        </svg>
    );
}

export {Icon};