/**
 * Represents the details of a product.
 */
type ProdutoDetalhes = {
    [key: string]: string;
};

/**
 * Represents a product in the catalog.
 */
export type Item = {
    id: number
    /** Product title */
    title: string;

    /** Short product description */
    short_description: string;

    /** Full product description */
    full_description: string;

    /** Product-specific details such as design, material, size etc. */
    product_details: ProdutoDetalhes;

    /** Call to action encouraging purchase or interaction */
    call_to_action: string;
    categoryId: number
    image?: string
    price?: number
};

/**
 * Represents a list of products in the catalog.
 */
