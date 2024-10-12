import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common'
@Component({
selector: 'app-product-details',
standalone: true,
imports: [CommonModule],
templateUrl: './product-details.component.html',
styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
product?: Product;

constructor(
    private productService: ProductService,
    private route: ActivatedRoute
) { }

ngOnInit(): void {
    this.route.params.subscribe(params => {
    const productId = +params['id']; // Convert string to number
    this.product = this.productService.getProductById(productId);
    });
}
}