import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
selector: 'app-product-list',
standalone: true,
imports: [CommonModule, RouterOutlet, RouterLink],
templateUrl: './product-list.component.html',
styleUrl: './product-list.component.scss'
})

export class ProductListComponent {
    products: Product[] = [];
    cartService: any;

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }

    addToCart(product: Product): void {
        this.cartService.addToCart(product);
    }

}