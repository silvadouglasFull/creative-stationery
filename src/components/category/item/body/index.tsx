import type { Item } from "@components/category/item/types"
import { colors } from "@flavor/colors"
import type React from "react"
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const Body: React.FC<Partial<Item>> = ({ name, categoryId }: Partial<Item>) => {
    const navigate = useNavigate()
    const handleCategory = () => {
        navigate(`/products?category=${categoryId}`)
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