import { Title } from "@components/title";
import { nameFlavor } from "@flavor/index";
import { Categories } from "@modules/products/pages/home/layouts/categories";
import { Products } from "@modules/products/pages/home/layouts/products";
import type React from "react";

export const Home: React.FC = () => {
    return (
        <section className="container p-5">
            <Title>
                Categorias de Produtos
            </Title>
            <Categories />
            <Title>
                Produtos da {nameFlavor}
            </Title>
            <Products />
        </section>
    )
}