import { Products as List } from "@components/products"
import { useGroupItems } from "@components/products/hooks/useGroupItems"
import { categories } from "@flavor/products"
export const Categories = () => {
    const { items } = useGroupItems({ products: categories })
    return (
        <List items={items} />
    )
}