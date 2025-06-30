import type { TRoute } from "@flavor/links/types";

export type Slide = {
    id: number;
    midia: string;
    textButton: string;
    title: string;
    subtitle: string; buttonLink?: string
};

export type BreadCrumps = {
    id: number | string
    midia: string
    url: TRoute
}