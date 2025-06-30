import { CarouselItem } from '@components/carousel/carouselItem';
import '@components/carousel/styles.css';
import type { CarouselSlides } from '@components/carousel/types';
import type React from 'react';
import { Carousel } from 'react-bootstrap';
;

export const HeroCarousel: React.FC<CarouselSlides> = ({ items }: CarouselSlides) => {
    return (
        <Carousel fade controls={false} indicators={true}>
            {items?.length ? items.map((item) => (
                <Carousel.Item key={item.id} id={`item-slide-${item.id}`}>
                    <CarouselItem {...item} />
                </Carousel.Item>
            )) : null}
        </Carousel>
    );
};

