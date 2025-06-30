import { Button } from "@components/button"
import { Icon } from "@components/icons"
import { handleSaleAction } from "@components/products/item/body/saleAction"
import type { Item } from "@components/products/item/types"
import { colors } from "@flavor/colors"
import { formatToBRL } from "@utils/transfomerText"
import type React from "react"
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const Body: React.FC<Partial<Item>> = ({ name, description, price, categoryId }: Partial<Item>) => {
    const navigate = useNavigate()
    const handleCategory = () => {
        navigate(`/products?category=${categoryId}`)
    }
    if (description) {
        return (
            <Card.Body className="p-0">
                <Card.Title className="border border-0 p-3 m-0 rounded-top border text-center fw-bold text-light" style={{
                    backgroundColor: colors.mauve,
                }}>
                    {name}
                    {price && (
                        <Card.Text>
                            {formatToBRL(price)}
                        </Card.Text>
                    )}
                </Card.Title>
                <Card.Footer className="bg-light border boder-top-0">
                    <Card.Text className="text-dark text-monospace">
                        {description}
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button className="text-uppercase" size="lg" onClick={() => handleSaleAction({ name, description })}>
                            Comprar <Icon name="fa-brands fa-whatsapp" />
                        </Button>
                    </div>
                </Card.Footer>
            </Card.Body>
        )
    }
    return (
        <Card.Body className="rounded-top border" style={{
            backgroundColor: colors.mauve,
            cursor: 'pointer'
        }}
            onClick={handleCategory}>
            <Card.Text className="text-center fw-bold text-light">
                {name}
            </Card.Text>
        </Card.Body>
    )
}