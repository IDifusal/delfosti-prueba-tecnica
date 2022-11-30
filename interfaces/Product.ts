export interface Product {
    price:    string;
    id?:      string;
    name:     string;
    image:    string;
    default?: string;
    isFavorite?: boolean;
}
