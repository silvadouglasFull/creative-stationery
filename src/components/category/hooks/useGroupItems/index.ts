import type { UseGroupItems, UseGroupItemsParams } from "@components/products/hooks/useGroupItems/types"
import type { Item } from "@components/products/item/types"
import { groupBy } from "@utils/transformArray"
import { useEffect, useState } from "react"

export const useGroupItems = ({ products }: UseGroupItemsParams): UseGroupItems => {
    const [items, setItems] = useState<Item[]>([])
    useEffect(() => {
        const groupItems = () => {
            if (products.length) {
                const itemsAgroupeds = groupBy({ array: products, key: 'category' })
                const items: Item[] = []
                if ((itemsAgroupeds && typeof itemsAgroupeds === 'object') && (!Array.isArray(itemsAgroupeds))) {
                    Object.keys(itemsAgroupeds).forEach(key => {
                        if (itemsAgroupeds[key]?.length) {
                            const { category, name, ...rest } = itemsAgroupeds[key][0]
                            items.push({
                                category,
                                name: category,
                                ...rest,
                            })
                        }
                    })
                }
                setItems(items)
            }
        }
        groupItems()
    }, [products])
    return {
        items
    }
}