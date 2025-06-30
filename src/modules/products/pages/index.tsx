import { Products as List } from "@components/products"
import { nameFlavor } from "@flavor/index"
import { products } from "@flavor/products"
import { Card } from "react-bootstrap"
export const Products = () => {
    return (
        <section className="container p-3 d-flex flex-column justify-content-start align-items-center">
            <Card className="p-3 border-0 d-block d-md-none text-center">
                <Card.Title>
                    Todos os produtos da {nameFlavor}
                </Card.Title>
            </Card>
            <Card className="p-3 border-0 d-none d-md-block">
                <Card.Title>
                    Todos os produtos da {nameFlavor}
                </Card.Title>
            </Card>
            <List items={products} />
        </section>
    )
}