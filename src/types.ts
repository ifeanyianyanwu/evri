export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping?: boolean;
  featured?: boolean;
};

export type ProductList = Product[];

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  image: string;
};

export type WishlistItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type ProductInfo = {
  id: string;
  stock: number;
  price: number;
  colors: string[];
  category: string;
  images: {
    id: string;
    width: number;
    height: number;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails: {
      small: {
        url: string;
        width: number;
        height: number;
      };
      large: {
        url: string;
        width: number;
        height: number;
      };
      full: {
        url: string;
        width: number;
        height: number;
      };
    };
  }[];
  reviews: number;
  stars: number;
  name: string;
  description: string;
  company: string;
};
