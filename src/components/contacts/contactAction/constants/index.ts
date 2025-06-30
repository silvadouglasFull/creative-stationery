import type { ContactsActions } from "@components/contacts/contactAction/constants/types";

export const actionsFunctions: ContactsActions = {
    'Endereço': (text: string) => {
        // Abrir o endereço no Google Maps
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(text)}`, '_blank');
    },
    'Whatsapp': (text: string) => {
        // Abrir conversa no WhatsApp
        const phone = text.replace(/\D/g, '');
        window.open(`https://wa.me/${phone}`, '_blank');
    },
    'Email': (text: string) => {
        // Abrir cliente de email
        window.open(`mailto:${text}`, '_self');
    }
}