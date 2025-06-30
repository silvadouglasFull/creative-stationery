import type React from "react";
export type MobileStyle = React.CSSProperties | {
    width: React.CSSProperties['width'],
    height: React.CSSProperties['height'],
    objectFit: React.CSSProperties['objectFit'],
    objectPosition: React.CSSProperties['objectPosition'],
    filter: React.CSSProperties['filter'],
}
export type Styles = {
    mobile?: MobileStyle,
    desktop?: {
        width: React.CSSProperties['width'],
        height: React.CSSProperties['height'],
        objectFit: React.CSSProperties['objectFit'],
        objectPosition: React.CSSProperties['objectPosition'],
        filter: React.CSSProperties['filter'],
    }
}