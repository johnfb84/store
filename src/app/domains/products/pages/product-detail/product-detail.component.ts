import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() id?: string
  product = signal<Product | null>(null)
  cover = signal('')
  private productService = inject(ProductService)
  private cartService = inject(CartService)

  ngOnInit(): void {
    if (this.id) {
      this.productService.getOneProduct(this.id)
        .subscribe({
          next: (product) => {
            this.product.set(product)
            if (product.images.length > 0) {
              this.cover.set(product.images[0])
            }
          }
        })
    }
  }

  changeCover(newImage: string) {
    this.cover.set(newImage)
  }

  addProductToCart() {
    const product = this.product()
    if (product)
      this.cartService.addToCart(product)
  }
}
