import { Component, inject, signal } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component'
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])
  categories = signal<Category[]>([])
  private cartService = inject(CartService)
  private productService = inject(ProductService)
  private categoryService = inject(CategoryService)

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  addProductToCart(product: Product) {
    console.log('ingresa a metodo padre add to cart')
    this.cartService.addToCart(product)
  }

  private getProducts() {
    this.productService.getProducts()
      .subscribe({
        next: (product) => {
          this.products.set(product)
        },
        error: () => {

        }
      })
  }

  private getCategories() {
    this.categoryService.getAll()
      .subscribe({
        next: (category) => {
          this.categories.set(category)
        },
        error: () => {

        }
      })
  }
}
