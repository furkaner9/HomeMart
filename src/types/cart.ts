import { Product } from './product';

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  product: Product;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
}
