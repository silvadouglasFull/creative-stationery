import { Body } from "@components/products/item/body"
import type { Item } from "@components/products/item/types"
import type React from "react"
import { Card, Col } from "react-bootstrap"
export const CardItem: React.FC<Item> = ({ image, full_description, ...rest }: Item) => {
    return (
        <Col sm={12} md={4}>
            <Card className="shadow-lg p-0 mb-5 bg-body-tertiary rounded d-block d-md-none p-0 mb-3 w-100" style={{
                height: 600
            }}>
                <Card.Img variant="top" className="w-100 hw-100 hh-100" src={image} />
                <Body {...rest} />
            </Card>
            <Card className="shadow-lg p-0 mb-5 bg-body-tertiary rounded d-none d-md-block p-0 m-3" style={{
                width: '18rem',
                height: 600
            }}>
                <Card.Img variant="top" className="w-100" src={image} />
                <Body full_description={full_description} {...rest} />
            </Card>
        </Col>
    )
}