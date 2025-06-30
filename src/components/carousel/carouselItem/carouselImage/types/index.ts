import type React from "react";

export type CarouselImageProps = {
    src?: string;
    alt?: string;
}
export type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>