import type { Item } from "@components/products/item/types"
import type React from "react"
import { Card, Col } from "react-bootstrap"
import { Body } from "./body"
export const CardItem: React.FC<Item> = ({ imageUrl, description, ...rest }: Item) => {
    return (
        <Col sm={12} md={4}>
            <Card className="shadow-lg p-0 mb-5 bg-body-tertiary rounded d-block d-md-none p-0 mb-3 w-100" style={{
                height: description ? 600 : 'auto'
            }}>
                <Card.Img variant="top" className="w-100 hw-100 hh-100" src={imageUrl} />
                <Body description={description} {...rest} />
            </Card>
            <Card className="shadow-lg p-0 mb-5 bg-body-tertiary rounded d-none d-md-block p-0 m-3" style={{
                width: '18rem',
                height: description ? 600 : 'auto'
            }}>
                <Card.Img variant="top" className="w-100" src={imageUrl} />
                <Body description={description} {...rest} />
            </Card>
        </Col>
    )
}