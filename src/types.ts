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
