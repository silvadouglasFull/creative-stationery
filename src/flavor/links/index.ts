import type { Link as TSocialMidia } from "@components/footer/links/socialMidia/link/types";
import type { Contact, Link } from "@flavor/links/types";
import { formatPhoneNumber } from "@utils/form/mask/phone";
export const links: Link[] = [
    { id: 1, namePage: "Home", route: "/" },
    { id: 2, namePage: "Produtos", route: "/products" },
    { id: 3, namePage: "Contato", route: "/contacts" },
];
export const socialMidia: TSocialMidia[] = [
    {
        id: 1,
        nameSocialMidia: 'Whatsapp',
        route: 'https://api.whatsapp.com/send?phone=5519993507007',
        icon: 'fa-brands fa-whatsapp',
    },
    {
        id: 2,
        nameSocialMidia: 'Instagram',
        route: 'https://www.instagram.com/imaginacao_e_arte_helo',
        icon: 'fa-brands fa-instagram',
    }
]

export const contact: Contact[] = [
    {
        id: 2,
        type: 'Whatsapp',
        text: formatPhoneNumber('19993507007', 'pt'),
    }
]