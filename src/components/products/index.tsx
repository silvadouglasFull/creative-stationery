import { CardItem } from "@components/products/item"
import type { CardItems } from "@components/products/types"
import type React from "react"
import { Card, Row } from "react-bootstrap"
export const Products: React.FC<CardItems> = ({ items }: CardItems) => {
    if (!items.length) {
        return (
            <Card>
                <Card.Text>
                    Não há produtos para serem exibidos.
                </Card.Text>
            </Card>
        )
    }
    return (
        <Row className="d-flex justify-content-sm-center justify-content-md-start align-items-center flex-wrap">
            {items
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(item => (
                    <CardItem key={item.id} {...item} />
                ))}
        </Row>
    )
}