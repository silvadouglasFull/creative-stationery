import { Contacts as List } from "@components/contacts"
import { nameFlavor } from "@flavor/index"
import { Card } from "react-bootstrap"
export const Contacts = () => {
    return (
        <section className="container p-3 d-flex flex-column justify-content-center align-items-center">
            <Card className="p-3 border-0 d-block d-md-none text-center">
                <Card.Title>
                    Contatos da {nameFlavor}
                </Card.Title>
            </Card>
            <Card className="p-3 border-0 d-none d-md-block">
                <Card.Title>
                    Produtos da {nameFlavor}
                </Card.Title>
            </Card>
            <List />
        </section>
    )
}