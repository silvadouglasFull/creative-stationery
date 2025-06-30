import type { Item } from "@components/products/item/types";
import { socialMidia } from "@flavor/links";

export const handleSaleAction = ({ name, description }: Partial<Item>) => {
    const whatsappLink = socialMidia.find(item => item.nameSocialMidia === 'Whatsapp')
    const message = encodeURIComponent(`Olá! Tenho interesse no produto de nome ${name} com a descricão ${description}`);
    window.open(`${whatsappLink?.route}?text=${message}`);
}
