import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common'
import { CartItem } from '../../model/cartItem'; // Ensure you have this model, see below for its creation

@Component({
    selector: 'app-mini-cart',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './mini-cart.component.html',
    styleUrl: './mini-cart.component.scss'
})

export class MiniCartComponent implements OnInit {
    cartItems: Observable<CartItem[]>;  // Update this to use CartItem

    constructor(private cartService: CartService) {
        this.cartItems = this.cartService.getCartItems();  // This returns an Observable of CartItem[]
    }

    removeItem(item: Product): void {
        this.cartService.removeFromCart(item);
    }

    clearCart(): void {
        this.cartService.clearCart();
    }
    ngOnInit(): void {
    }

}