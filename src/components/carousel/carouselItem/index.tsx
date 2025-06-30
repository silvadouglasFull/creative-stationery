import { Caption } from '@components/carousel/carouselItem/carouselCaption';
import { CarouselImage } from '@components/carousel/carouselItem/carouselImage';
import type { Slide } from '@flavor/assets/types';
import React, { useEffect, useRef } from 'react';
export const CarouselItem: React.FC<Slide> = ({ midia, ...rest }) => {
    const refCaption = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
    }, [refCaption])
    return (
        <>
            <CarouselImage src={midia} />
            <Caption {...rest} />
        </>
    )
}