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
        captionStyle: {
            desktop: { top: '20%', margin: '0 auto' },
            mobile: {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
            }
        },
        styleMidia: {
            width: '100vh',
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'center 0%',
            filter: 'brightness(0.9)',
        }
    },
    {
        id: 2,
        midia: slide2,
        textButton: "Começar a criar",
        title: "Papelaria Criativa e Personalizada",
        subtitle: "Crie Planners, capas para livros, Lembrancinhas e tudo mais do jeito que você quer!",
        captionStyle: {
            desktop: { top: '20%', margin: '0 auto' },
            mobile: {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
            }
        },
        styleMidia: {
            width: '100vh',
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'center 0%',
            filter: 'brightness(0.9)',
        }
    },
    {
        id: 3,
        midia: slide3,
        textButton: "Começar a criar",
        title: "Papelaria Criativa e Personalizada",
        subtitle: "Crie Planners, capas para livros, Lembrancinhas e tudo mais do jeito que você quer!",
        captionStyle: {
            desktop: { top: '20%', margin: '0 auto' },
            mobile: {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
            }
        },
        styleMidia: {
            width: '100vh',
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'center 0%',
            filter: 'brightness(0.9)',
        }
    },
];
export const breadCrumps: BreadCrumps[] = []