import { Products as List } from "@components/products"
import { products } from "@flavor/products"
export const Products = () => {
    return (
        <List items={products} />
    )
}