import logo from '@assets/imaginacaoArte/logo.png';
import slide1 from "@assets/imaginacaoArte/slides/1.jpg";
import slide2 from "@assets/imaginacaoArte/slides/2.jpg";
import slide3 from "@assets/imaginacaoArte/slides/3.jpg";
import type { BreadCrumps, Slide } from "@flavor/assets/types";
export { logo, slide1, slide2, slide3 };
export const slides: Slide[] = [
    {
        id: 1,
        midia: slide1,
        textButton: "Começar a criar",
        title: "Papelaria Criativa e Personalizada",
        subtitle: "Crie Planners, capas para livros, Lembrancinhas e tudo mais do jeito que você quer!",
    },
    {
        id: 2,
        midia: slide2,
        textButton: "Ver produtos",
        title: "Produtos perfeitos para Você",
        subtitle: "Personalize do seu jeito, cardenos, postites, capaz para livros e muito mais!",
    },
    {
        id: 3,
        midia: slide3,
        textButton: "Começar a criar",
        title: "Conte com a Helô",
        subtitle: "A Helô sempre está pronta para te ajudar a despertar seu lado criativo!",
    },
];
export const breadCrumps: BreadCrumps[] = []