// src/app/cart-item.model.ts
import { Product } from "./product";

export interface CartItem {

    product: Product;
    quantity: number;
    
}