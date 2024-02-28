

interface review {
    id: number,
    userId: number,
    rating: number,
    comment: string,
    date: string
}

export interface product {
    id: string,
    name: string,
    price: number,
    stock: number,
    images: string[],
    description: string,
    category: string,
    brand: string,
    rating: number,
    reviews: review[],
    filters: string[]
}

export interface user {
    id: number,
    name: string,
    password: string,
    email: string,
    cart: string[]
    wishlist: string[]
}

export interface AuthContextType {
    signedIn: {status: boolean, id: number | null, card: null | []};
    setSignedIn: (value: {status: boolean, id: number | null, card: null | []}) => void;
}