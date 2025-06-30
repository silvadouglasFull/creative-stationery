import adesivos from "@assets/imaginacaoArte/categorias/adesivos.png"
import bloquinhoAnotacoes from "@assets/imaginacaoArte/categorias/bloquinhoAnotacoes.png"
import borrachas from "@assets/imaginacaoArte/categorias/borrachas.png"
import cadernos from "@assets/imaginacaoArte/categorias/cadernos.png"
import canetas from "@assets/imaginacaoArte/categorias/canetas.png"
import envelopes from "@assets/imaginacaoArte/categorias/envelopes.png"
import kitPersonalizado from "@assets/imaginacaoArte/categorias/kitPersonalizado.png"
import lembrancinhas from "@assets/imaginacaoArte/categorias/lembrancinhas.png"
import adesivos1 from '@assets/imaginacaoArte/products/adesivos 1.png'
import adesivos2 from '@assets/imaginacaoArte/products/adesivos 2.png'
import cadernoDeDesenhar from '@assets/imaginacaoArte/products/caderno de desenhar.jpeg'
import cadernoOpcao1 from '@assets/imaginacaoArte/products/caderno opcao 1.png'
import cadernoOpcao2 from '@assets/imaginacaoArte/products/caderno opcao 2.jpg'
import cadernoOpcao3 from '@assets/imaginacaoArte/products/caderno opcao 3.jpg'
import cardenDeDesenhar2 from '@assets/imaginacaoArte/products/carden de desenhar 2.jpg'
import envelope1 from '@assets/imaginacaoArte/products/envelope 1.png'
import { default as plannerOpcao1, default as product4 } from '@assets/imaginacaoArte/products/planner opcao 1.jpg'
import plannerOpcao2 from '@assets/imaginacaoArte/products/planner opcao 2.jpg'
import type { Item as Category } from "@components/category/item/types"
import type { Item as Product } from "@components/products/item/types"
export {
    adesivos, adesivos1,
    adesivos2, bloquinhoAnotacoes,
    borrachas, cadernoDeDesenhar, cadernoOpcao1,
    cadernoOpcao2,
    cadernoOpcao3, cadernos,
    canetas, cardenDeDesenhar2, envelope1, envelopes,
    kitPersonalizado,
    lembrancinhas, plannerOpcao1,
    plannerOpcao2
}
export const categories: Array<Category> = [
    {
        id: 5,
        categoryId: 5,
        name: "",
        price: 1.0,
        imageUrl: adesivos,
        category: "Adesivos",
        stock: 150
    },
    {
        id: 3,
        categoryId: 3,
        name: "",
        price: 1.2,
        imageUrl: borrachas,
        category: "Borrachas",
        stock: 100
    },
    {
        id: 1,
        categoryId: 1,
        name: "",
        price: 24.9,
        imageUrl: cadernos,
        category: "Cadernos",
        stock: 50
    },
    {
        id: 8,
        categoryId: 8,
        name: "",
        price: 1.0,
        imageUrl: bloquinhoAnotacoes,
        category: "Bloquinhos de Anotações",
        stock: 150
    },
    {
        id: 2,
        categoryId: 2,
        name: "",
        price: 2.5,
        imageUrl: canetas,
        category: "Canetas",
        stock: 200
    },
    {
        id: 7,
        categoryId: 7,
        name: "",
        price: 1.0,
        imageUrl: envelopes,
        category: "Envelopes",
        stock: 150
    },
    {
        id: 9,
        categoryId: 9,
        name: "",
        price: 1.0,
        imageUrl: kitPersonalizado,
        category: "Kits Personalizados",
        stock: 150
    },
    {
        id: 6,
        categoryId: 6,
        name: "",
        price: 1.0,
        imageUrl: lembrancinhas,
        category: "Lembrancinhas",
        stock: 150
    },
    {
        id: 4,
        categoryId: 4,
        name: "",
        price: 3.9,
        imageUrl: product4,
        category: "Planners e Agendas",
        stock: 80
    }
]
export const products: Array<Product> = [
    {
        id: 1,
        image: cadernoDeDesenhar,
        title: "Livro de Colorir \"Capivaras: Um Mundo de Cores para sua Criatividade!\"",
        short_description: "Prepare-se para embarcar em uma aventura adorável e relaxante com o nosso Livro de Colorir \"Capivaras\"! Com capas vibrantes e desenhos encantadores, este livro é perfeito para todas as idades soltarem a imaginação e transformarem cenas com capivaras fofas em verdadeiras obras de arte.",
        full_description: "Nosso Livro de Colorir \"Capivaras\" é mais do que um simples livro – é um convite à criatividade e ao relaxamento! Com uma capa dura e resistente em tons pastéis de amarelo e rosa, adornada com bolinhas divertidas, ele já encanta à primeira vista. A estrela da capa é uma capivara super fofa, aconchegada em uma poltrona em um cenário acolhedor, pronta para inspirar sua próxima obra-prima.\n\nPor dentro, você encontrará páginas repletas de ilustrações em preto e branco de capivaras em diversas situações e ambientes, desde momentos de lazer em casa até aventuras no jardim. Cada desenho foi cuidadosamente criado para estimular a imaginação e oferecer horas de diversão. Use seus lápis de cor, canetinhas ou giz de cera favoritos para dar vida a esses adoráveis personagens e seus mundos. É uma forma divertida e terapêutica de descontrair e uma excelente opção para presentear.",
        product_details: {
            "capa": "Capa dura com laminação fosca, decorada com ilustração de capivara e fundo em tons de amarelo e rosa com bolinhas.",
            "conteudo": "Diversas páginas com desenhos de capivaras em preto e branco para colorir.",
            "tamanho": "(Incluir aqui as dimensões do caderno, ex: A4, 20x25cm, etc. - informação não disponível na imagem)",
            "material": "Papel de alta qualidade, ideal para diferentes tipos de materiais de colorir."
        },
        call_to_action: "Adquira já o seu Livro de Colorir \"Capivaras\" e deixe a sua imaginação fluir!",
        categoryId: 1
    },
    {
        id: 2,
        image: adesivos1,
        title: "Adesivos de Agradecimento Florais - 'Obrigado!'",
        short_description: "Adicione um toque de carinho e gratidão aos seus pacotes com nossos adesivos de agradecimento 'Obrigado!' decorados com elegantes arranjos florais. Perfeitos para embalagens e presentes!",
        full_description: "Expresse sua gratidão de forma elegante e memorável com nossos Adesivos de Agradecimento Florais. Cada adesivo é cuidadosamente projetado com a palavra 'obrigado!' em uma caligrafia charmosa, emoldurada por delicados arranjos de flores e folhagens em tons pastel de azul, roxo e verde. A frase 'Seu produto foi embalado com muito carinho!' reforça a atenção e o cuidado dedicados ao cliente. Ideal para fechar embalagens, decorar caixas de presentes, sacolas ou até mesmo envelopes de correspondência, esses adesivos adicionam um toque final especial que certamente será notado e apreciado. Inclui também a sugestão 'Aproveite para registrar esse momento! @seuinstagram', incentivando o compartilhamento nas redes sociais e fortalecendo sua marca.",
        product_details: {
            "design": "Fundo branco com bordas florais em tons pastel (azul, roxo, verde) e texto 'obrigado!', 'Seu produto foi embalado com muito carinho!' e 'Aproveite para registrar esse momento! @seuinstagram'.",
            "formato": "Retangular (similar a um cartão, mas descrito como adesivo para site de papelaria criativa).",
            "uso_sugerido": "Embalagens, presentes, pacotes, correspondências.",
            "material": "Adesivo de alta qualidade (presumido pela natureza do produto)."
        },
        call_to_action: "Adicione um toque de gratidão e beleza às suas entregas! Compre agora seus adesivos de agradecimento.",
        categoryId: 5
    },
    {
        id: 3,
        image: envelope1,
        title: "Envelope Decorado com Raposas - Afeto e Encanto",
        short_description: "Envie mensagens com um toque de ternura! Nosso envelope decorado com um desenho adorável de raposas é perfeito para cartões, pequenas lembranças ou para guardar seus segredos mais queridos.",
        full_description: "Este charmoso envelope não é apenas um meio para suas mensagens, mas uma pequena obra de arte em si! Apresenta uma ilustração encantadora de uma raposa adulta e seu filhote, transmitindo uma sensação de carinho e proteção, cercados por delicadas flores em tons suaves. Ideal para embalar um presente especial, enviar um cartão personalizado, ou simplesmente adicionar um toque de afeto à sua correspondência. Feito em papel de alta qualidade, permite que sua criatividade se expresse desde o primeiro contato. O envelope é entregue em sua forma desdobrada, pronto para ser montado com facilidade e preenchido com sua mensagem mais sincera.",
        product_details: {
            "design": "Ilustração central de raposa adulta e filhote em tons terrosos, com detalhes de flores e folhagens. Fundo branco.",
            "formato": "Template de envelope para montagem (ilustrado desdobrado).",
            "texto_adicional": "'Ao Morador' (no verso/aba interna).",
            "uso_sugerido": "Cartas, cartões de presente, pequenas lembranças, convites.",
            "material": "Papel de alta qualidade (presumido pela natureza do produto)."
        },
        call_to_action: "Deixe suas mensagens ainda mais especiais com nosso Envelope Decorado com Raposas. Adquira já o seu!",
        categoryId: 7
    },
    {
        id: 4,
        title: "Tags de Agradecimento Personalizadas - 'Gratidão pela Preferência!'",
        short_description: "Mostre sua gratidão com estilo! Nossas tags personalizáveis são perfeitas para adicionar um toque de carinho extra às suas embalagens, reforçando sua marca e o cuidado com cada cliente.",
        full_description: "Diga 'Gratidão pela preferência!' de uma forma que realmente encante seus clientes com nossas tags personalizadas. Com um design elegante e cantos arredondados, estas tags são o detalhe perfeito para qualquer embalagem. Disponíveis em tons suaves de pêssego e cinza, cada tag apresenta uma frase acolhedora como 'Tudo foi preparado com muito amor e carinho que você merece!' e espaço para suas informações de contato, como @ do Instagram e telefone. Elas são ideais para prender em sacolas, caixas, cestas de presentes ou até mesmo em produtos individuais, transmitindo uma mensagem de carinho e profissionalismo. Faça do agradecimento uma parte memorável da experiência do seu cliente!",
        product_details: {
            "design": "Texto 'Gratidão pela preferência!' com um coração vazado, seguido de mensagem de carinho e campos para @ do Instagram e telefone. Disponível em tons de pêssego e cinza claro.",
            "formato": "Retangular com cantos arredondados (tipo tag).",
            "personalizacao": "Campos personalizáveis para redes sociais e contato telefônico.",
            "uso_sugerido": "Tags para embalagens, presentes, produtos, sacolas."
        },
        call_to_action: "Personalize suas entregas e fortaleça seu relacionamento com o cliente! Encomende suas tags de agradecimento agora.",
        categoryId: 5
    },
    {
        id: 5,
        image: cadernoOpcao1,
        title: "Caderno 'Adoração Pura' - Elegância Floral",
        short_description: "Um caderno para inspirar e elevar seus pensamentos. Com um design floral sereno e a mensagem 'Adoração Pura', ele é perfeito para anotações especiais, diário de gratidão ou estudos.",
        full_description: "Descubra a beleza e a serenidade em cada página com o nosso Caderno 'Adoração Pura'. Sua capa elegante apresenta um círculo central em tons de verde e dourado, emoldurado por delicadas flores e folhas em verde água e detalhes dourados/prateados, transmitindo uma sensação de paz e inspiração. No centro do círculo, a frase 'Adoração Pura' convida à reflexão e à devoção. Ideal para usar como diário de orações, caderno de estudos religiosos, anotações de pensamentos e inspirações, ou para presentear alguém especial que valoriza a espiritualidade e a beleza. Um companheiro perfeito para seus momentos de quietude e criatividade.",
        product_details: {
            "capa": "Capa dura com design floral circular em tons de verde, dourado e prata, com texto 'Adoração Pura' no centro.",
            "conteudo": "Páginas lisas ou pautadas (a especificar, se houver opção).",
            "tamanho": "(Presumido tamanho de caderno, a especificar ex: A5, A4, etc. - informação não disponível na imagem)",
            "material": "Capa dura e papel de alta qualidade (presumido)."
        },
        call_to_action: "Inspire-se e registre seus momentos de fé e gratidão. Adquira seu Caderno 'Adoração Pura' hoje!",
        categoryId: 1
    },
    {
        id: 6,
        image: cardenDeDesenhar2,
        title: "Livro de Colorir Sonic: Aventura em Cores!",
        short_description: "Acelere a diversão com o Livro de Colorir do Sonic! Perfeito para fãs do ouriço mais rápido, este livro garante horas de entretenimento com ilustrações dinâmicas para colorir.",
        full_description: "Prepare-se para uma aventura cheia de velocidade e criatividade com o nosso Livro de Colorir do Sonic! A capa vibrante traz o Sonic em ação, em um fundo azul elétrico que já convida à diversão. Por dentro, você encontrará diversas páginas com os personagens e cenários favoritos da turma do Sonic, prontos para ganhar vida com suas cores. Ideal para crianças e fãs de todas as idades, este livro não só entretém, mas também ajuda a desenvolver a coordenação motora e a criatividade. Seja para um presente ou para a coleção pessoal, é diversão garantida para soltar a imaginação no universo do Sonic!",
        product_details: {
            "capa": "Capa ilustrada com personagem Sonic em fundo azul vibrante, com o nome 'Sonic'.",
            "conteudo": "Páginas com desenhos em preto e branco do universo Sonic para colorir.",
            "tamanho": "(Presumido tamanho de caderno, ex: A4, etc. - informação não disponível na imagem)",
            "material": "Papel de qualidade adequado para colorir (presumido)."
        },
        call_to_action: "Entre na velocidade da cor com o Livro de Colorir do Sonic! Garanta já o seu!",
        categoryId: 1
    },
    {
        id: 7,
        image: cadernoOpcao2,
        title: "Agenda Personalizável 'Do Pioneiro' - Elegância e Organização",
        short_description: "Organize seus dias com estilo e propósito! Nossa Agenda 'Do Pioneiro' combina design sofisticado com a praticidade de personalização, ideal para quem busca uma ferramenta elegante de planejamento.",
        full_description: "Apresentamos a Agenda 'Do Pioneiro', uma ferramenta essencial para a sua organização diária, que também reflete seu bom gosto. Sua capa dura exibe um design deslumbrante, com um círculo dourado central em meio a delicadas formas abstratas em tons de verde menta e elegantes flores brancas com detalhes dourados. O espaço personalizável para 'NOME' logo abaixo de 'AGENDA DO PIONEIRO' a torna única, perfeita para identificar seu instrumento de planejamento. Seja para compromissos, estudos, anotações importantes ou para o seu dia a dia como pioneiro, esta agenda oferece um visual sofisticado e uma estrutura funcional para acompanhar seus objetivos. Um presente ideal e uma peça de papelaria que inspira produtividade e elegância.",
        product_details: {
            "capa": "Capa dura com design floral e abstrato em tons de verde menta e dourado, com círculo central para 'AGENDA DO PIONEIRO' e 'NOME' personalizável.",
            "conteudo": "Páginas internas para planejamento (detalhes a confirmar, ex: diário, semanal, pautado).",
            "tamanho": "(Presumido tamanho de agenda/caderno, a especificar ex: A5, A4, etc. - informação não disponível na imagem)",
            "personalizacao": "Espaço para personalização do nome na capa.",
            "material": "Capa dura e papel de alta qualidade (presumido)."
        },
        call_to_action: "Planeje seu futuro com elegância e personalize sua jornada. Adquira sua Agenda 'Do Pioneiro' hoje!",
        categoryId: 4
    },
    {
        id: 8,
        image: plannerOpcao2,
        title: "Planner Anual Snoopy 2025 - Leveza e Organização",
        short_description: "Organize seu ano com a companhia divertida do Snoopy! Nosso Planner 2025 traz a alegria do personagem em uma capa leve e funcional para todos os seus planos.",
        full_description: "Comece 2025 com o pé direito e a companhia mais charmosa: o Snoopy! Nosso Planner Anual 2025 apresenta uma capa adorável com o Snoopy relaxando no telhado de sua casinha, em um cenário de céu azul com nuvens fofas e toques de verde. O design suave e convidativo torna o planejamento uma atividade prazerosa. Ideal para estudantes, profissionais ou qualquer um que adore o universo Peanuts e queira manter suas tarefas, compromissos e metas organizados ao longo do ano. Com este planner, cada dia será mais leve e inspirador. Perfeito para presentear ou para se organizar com um toque de nostalgia e bom humor.",
        product_details: {
            "capa": "Capa com ilustração central de Snoopy em sua casinha sob um céu de nuvens, emoldurado por um círculo. Texto 'Planner' e '2025' em verde-oliva. Fundo da capa em azul claro.",
            "conteudo": "Páginas internas para planejamento anual, mensal e/ou semanal (detalhes a confirmar).",
            "tamanho": "(Presumido tamanho de planner, a especificar ex: A5, etc. - informação não disponível na imagem)",
            "material": "Capa dura e papel de alta qualidade (presumido)."
        },
        call_to_action: "Comece 2025 com o charme do Snoopy! Adquira seu Planner Anual e organize-se com alegria.",
        categoryId: 4
    },
    {
        id: 9,
        image: plannerOpcao1,
        title: "Planner Anual Panda 2025 - Organização Divertida e Sustentável",
        short_description: "Organize seu ano com a fofura e o charme do Panda! Nosso Planner 2025 combina um design divertido com a funcionalidade que você precisa para um ano produtivo e cheio de estilo.",
        full_description: "Dê um toque de alegria e organização ao seu 2025 com o nosso Planner Anual Panda! A capa vibrante apresenta um adorável rosto de panda com bochechas rosadas e um sorriso cativante, emoldurado por folhas de bambu que trazem um toque de natureza. O design moderno e divertido, com detalhes quadriculados e pontilhados, é perfeito para quem busca um planner que seja tanto funcional quanto inspirador. Ideal para planejar metas, compromissos, estudos ou simplesmente para registrar suas ideias, este planner é um convite à produtividade com um toque de fofura. Perfeito para estudantes, profissionais ou amantes de pandas de todas as idades.",
        product_details: {
            "capa": "Capa com ilustração de rosto de panda, folhas de bambu, e faixa preta com 'Planner' em branco. Fundo branco com detalhes pontilhados e quadriculados.",
            "conteudo": "Páginas internas para planejamento anual, mensal e/ou semanal (detalhes a confirmar).",
            "tamanho": "(Presumido tamanho de planner, a especificar ex: A5, etc. - informação não disponível na imagem)",
            "material": "Capa dura e papel de alta qualidade (presumido)."
        },
        call_to_action: "Organize seu ano com a fofura do Panda! Adquira seu Planner Anual 2025 e transforme seus planos em realidade.",
        categoryId: 4
    }
]