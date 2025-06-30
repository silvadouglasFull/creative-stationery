export type TRoute = '/' | '/products' | '/contacts';
export type NamePage = 'Home' | 'Produtos' | 'Contato'
export type Link = {
    id: number | string;
    namePage: NamePage;
    route: TRoute
};

export type Type = 'Endereço' | 'Whatsapp' | 'Email'
export type Contact = {
    id: number | string
    type: Type
    text: string
}