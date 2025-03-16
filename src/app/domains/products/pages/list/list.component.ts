import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component'
import { Product } from '@shared/models/product.model';

import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  products = signal<Product[]>([])
  categories = signal<Category[]>([])
  @Input() category_id?: string
  private cartService = inject(CartService)
  private productService = inject(ProductService)
  private categoryService = inject(CategoryService)

  ngOnInit(): void {
    this.getCategories()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getProducts()
  }

  addProductToCart(product: Product) {
    console.log('ingresa a metodo padre add to cart')
    this.cartService.addToCart(product)
  }

  private getProducts() {
    this.productService.getProducts(this.category_id)
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
