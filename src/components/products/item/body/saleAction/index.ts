import type { Item } from "@components/products/item/types";
import { socialMidia } from "@flavor/links";

export const handleSaleAction = ({ title, full_description }: Partial<Item>) => {
    const whatsappLink = socialMidia.find(item => item.nameSocialMidia === 'Whatsapp')
    const message = encodeURIComponent(`Olá! Tenho interesse no produto de nome ${title} com a descricão ${full_description}`);
    window.open(`${whatsappLink?.route}?text=${message}`);
}
