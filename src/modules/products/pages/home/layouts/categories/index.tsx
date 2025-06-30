import { Category as List } from "@components/category"
import { useGroupItems } from "@components/category/hooks/useGroupItems"
import { categories } from "@flavor/products"
export const Categories = () => {
    const { items } = useGroupItems({ category: categories })
    return (
        <List items={items} />
    )
}