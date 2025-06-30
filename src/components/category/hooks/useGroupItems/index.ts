import type { UseGroupItems, UseGroupItemsParams } from "@components/category/hooks/useGroupItems/types"
import type { Item } from "@components/category/item/types"
import { groupBy } from "@utils/transformArray"
import { useEffect, useState } from "react"

export const useGroupItems = ({ category }: UseGroupItemsParams): UseGroupItems => {
    const [items, setItems] = useState<Item[]>([])
    useEffect(() => {
        const groupItems = () => {
            if (category.length) {
                const itemsAgroupeds = groupBy({ array: category, key: 'category' })
                const items: Item[] = []
                if ((itemsAgroupeds && typeof itemsAgroupeds === 'object') && (!Array.isArray(itemsAgroupeds))) {
                    Object.keys(itemsAgroupeds).forEach(key => {
                        if (itemsAgroupeds[key]?.length) {
                            const { category, categoryId, id, description, imageUrl, price, stock } = itemsAgroupeds[key][0] as Item
                            items.push({
                                category,
                                name: category,
                                categoryId,
                                id,
                                description,
                                imageUrl,
                                price,
                                stock
                            })
                        }
                    })
                }
                setItems(items)
            }
        }
        groupItems()
    }, [category])
    return {
        items
    }
}