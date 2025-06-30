import { Button } from "@components/button"
import { Products as List } from "@components/products"
import { Title } from "@components/title"
import { nameFlavor } from "@flavor/index"
import { useFilterCategory } from "@modules/products/hooks/useFilterCategory"
import { useGetSearchParams } from "../hooks/useGetSearchParams"
export const Products = () => {
    const params = useGetSearchParams('category')
    const { items } = useFilterCategory(params)
    return (
        <section className="container p-3 d-flex flex-column justify-content-start align-items-center">
            <Title>
                Todos os produtos da {nameFlavor}
            </Title>
            <List items={items} />
            {params && (
                <Button size="lg">
                    Ver todos os produtos
                </Button>
            )}
        </section>
    )
}