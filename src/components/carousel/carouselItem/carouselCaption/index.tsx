import { Button } from "@components/button";
import { styles } from "@components/carousel/carouselItem/carouselCaption/styles";
import type { Slide } from '@flavor/assets/types';
import type React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
export const Caption: React.FC<Partial<Slide>> = ({ title, subtitle, textButton, buttonLink }: Partial<Slide>) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(buttonLink ?? '/products')
    }
    return (
        <Card className="border border-0 p-0" style={styles.cardCaption}>
            <Card.Body className="text-center p-3">
                {title && (<Card.Title className='text-dark'>{title}</Card.Title>)}
                {subtitle && (<Card.Text className='text-dark'>{subtitle}</Card.Text>)}
                {textButton && (
                    <Button onClick={handleClick}>
                        {textButton}
                    </Button>
                )}
            </Card.Body>
        </Card>
    )
}