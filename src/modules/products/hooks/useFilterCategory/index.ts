import type { Item } from "@components/products/item/types";
import { products } from "@flavor/products";
import type { UseFilterCategory } from "@modules/products/hooks/useFilterCategory/types";
import { useEffect, useState } from "react";
export const useFilterCategory = (category: string): UseFilterCategory => {
    const [items, setItems] = useState<Array<Item>>(products)
    useEffect(() => {
        const finCategory = () => {
            if (products.length && category) {
                const filteredProducts = products.filter(item => item.categoryId === Number(category));
                setItems(filteredProducts.length ? filteredProducts : products);
            } else {
                setItems(products)
            }
        }
        finCategory()
    }, [products, category])
    return {
        items
    }
}