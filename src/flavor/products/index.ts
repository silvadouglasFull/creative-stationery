import adesivos from "@assets/imaginacaoArte/categorias/adesivos.png"
import bloquinhoAnotacoes from "@assets/imaginacaoArte/categorias/bloquinhoAnotacoes.png"
import borrachas from "@assets/imaginacaoArte/categorias/borrachas.png"
import cadernos from "@assets/imaginacaoArte/categorias/cadernos.png"
import canetas from "@assets/imaginacaoArte/categorias/canetas.png"
import envelopes from "@assets/imaginacaoArte/categorias/envelopes.png"
import kitPersonalizado from "@assets/imaginacaoArte/categorias/kitPersonalizado.png"
import lembrancinhas from "@assets/imaginacaoArte/categorias/lembrancinhas.png"
import product1 from "@assets/imaginacaoArte/products/1.png"
import product2 from "@assets/imaginacaoArte/products/2.png"
import product3 from "@assets/imaginacaoArte/products/3.png"
import product4 from "@assets/imaginacaoArte/products/4.png"
import product5 from "@assets/imaginacaoArte/products/5.png"
import type { Item } from "@components/products/item/types"
export {
    adesivos,
    bloquinhoAnotacoes,
    borrachas, cadernos,
    canetas, envelopes,
    kitPersonalizado, lembrancinhas, product1,
    product2, product3,
    product4, product5
}
export const categories: Array<Item> = [
    {
        id: 5,
        name: "",
        price: 1.0,
        imageUrl: adesivos,
        category: "Adesivos",
        stock: 150
    },
    {
        id: 3,
        name: "",
        price: 1.2,
        imageUrl: borrachas,
        category: "Borrachas",
        stock: 100
    },
    {
        id: 1,
        name: "",
        price: 24.9,
        imageUrl: cadernos,
        category: "Cadernos",
        stock: 50
    },
    {
        id: 8,
        name: "",
        price: 1.0,
        imageUrl: bloquinhoAnotacoes,
        category: "Bloquinhos de Anotações",
        stock: 150
    },
    {
        id: 2,
        name: "",
        price: 2.5,
        imageUrl: canetas,
        category: "Canetas",
        stock: 200
    },
    {
        id: 7,
        name: "",
        price: 1.0,
        imageUrl: envelopes,
        category: "Envelopes",
        stock: 150
    },
    {
        id: 9,
        name: "",
        price: 1.0,
        imageUrl: kitPersonalizado,
        category: "Kits Personalizados",
        stock: 150
    },
    {
        id: 6,
        name: "",
        price: 1.0,
        imageUrl: lembrancinhas,
        category: "Lembrancinhas",
        stock: 150
    },
    {
        id: 4,
        name: "",
        price: 3.9,
        imageUrl: product4,
        category: "Planners e Agendas",
        stock: 80
    }
]
export const products: Array<Item> = [
    {
        id: 1,
        name: "Caderno Universitário",
        price: 24.90,
        imageUrl: product1,
        category: "Cadernos",
        stock: 50,
        description: "Organize suas anotações com estilo! O Caderno Universitário possui capa resistente e folhas de alta qualidade, perfeito para acompanhar sua rotina de estudos."
    },
    {
        id: 2,
        name: "Caneta Esferográfica Azul",
        price: 2.50,
        imageUrl: product2,
        category: "Canetas",
        stock: 200,
        description: "Escreva com suavidade e precisão! A Caneta Esferográfica Azul oferece conforto e durabilidade para o seu dia a dia escolar ou profissional."
    },
    {
        id: 3,
        name: "Borracha Branca",
        price: 1.20,
        imageUrl: product3,
        category: "Borracha",
        stock: 100,
        description: "Apague sem deixar vestígios! A Borracha Branca é macia e eficiente, ideal para manter seus trabalhos sempre limpos e impecáveis."
    },
    {
        id: 4,
        name: "Planners",
        price: 3.90,
        imageUrl: product4,
        category: "Marca Texto",
        stock: 80,
        description: "Planeje seus dias com criatividade! Os Planners são perfeitos para organizar tarefas, compromissos e metas com muito charme e praticidade."
    },
    {
        id: 5,
        name: "Lápis Preto HB",
        price: 1,
        imageUrl: product5,
        category: "Lápis",
        stock: 150,
        description: "Desenhe e escreva com precisão! O Lápis Preto HB oferece traço macio e uniforme, ideal para estudantes, artistas e profissionais."
    }
]