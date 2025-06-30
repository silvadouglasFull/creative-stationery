import type { TRoute } from "@flavor/links/types";
import type React from "react";

export type CaptionStyle = {
    mobile: React.CSSProperties
    desktop: React.CSSProperties
}
export type Slide = {
    id: number;
    midia: string;
    textButton: string;
    title: string;
    subtitle: string;
    captionStyle?: CaptionStyle
    buttonLink?: string
    styleMidia?: React.CSSProperties
};

export type BreadCrumps = {
    id: number | string
    midia: string
    url: TRoute
}