import { CarouselImage } from '@components/carousel/carouselItem/carouselImage';
import type { Slide } from '@flavor/assets/types';
import React from 'react';
import { Button, Card, Carousel, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export const CarouselItem: React.FC<Slide> = ({ midia, subtitle, textButton, title, captionStyle, buttonLink, styleMidia }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(buttonLink ?? '/cotacao')
    }
    return (
        <>
            {styleMidia ? (<CarouselImage src={midia} style={{ ...styleMidia }} />) : (<CarouselImage src={midia} />)}
            <Carousel.Caption className='d-flex h-100 align-items-center justify-content-center'>
                <Col className='col-12 vw-100 p-4' style={captionStyle ? { ...captionStyle.mobile } : {}}>
                    {title && (<Card.Title className='text-dark'>{title}</Card.Title>)}
                    {subtitle && (<Card.Text className='text-dark'>{subtitle}</Card.Text>)}
                    {textButton && (
                        <Button variant='dark' onClick={handleClick}>
                            {textButton}
                        </Button>
                    )}
                </Col>
            </Carousel.Caption>
        </>
    )
}