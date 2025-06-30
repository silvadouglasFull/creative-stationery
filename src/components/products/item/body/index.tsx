import { Button } from "@components/button"
import { Icon } from "@components/icons"
import { handleSaleAction } from "@components/products/item/body/saleAction"
import type { Item } from "@components/products/item/types"
import { colors } from "@flavor/colors"
import { formatToBRL } from "@utils/transfomerText"
import type React from "react"
import { Card } from "react-bootstrap"
import { styleDescription } from "./styles"

export const Body: React.FC<Partial<Item>> = ({ title, short_description, full_description, price }: Partial<Item>) => {
    return (
        <Card.Body className="p-0">
            <Card.Title className="border border-0 p-3 m-0 rounded-top border text-center fw-bold text-light" style={{
                backgroundColor: colors.mauve,
            }}>
                {title}
                {price && (
                    <Card.Text>
                        {formatToBRL(price)}
                    </Card.Text>
                )}
            </Card.Title>
            <Card.Footer className="bg-light border boder-top-0">
                <Card.Text className="text-dark text-monospace" style={{
                    ...styleDescription,
                    WebkitBoxOrient: "vertical" as const
                }}>
                    {short_description}
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button className="text-uppercase" size="lg" onClick={() => handleSaleAction({ title, full_description })}>
                        Comprar <Icon name="fa-brands fa-whatsapp" />
                    </Button>
                </div>
            </Card.Footer>
        </Card.Body>
    )

}