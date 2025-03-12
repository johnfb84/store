import { Component, inject, signal } from '@angular/core';

import { ProductComponent } from './../../components/product/product.component'
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])
  private cartService = inject(CartService)

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 400,
        image: 'https://picsum.photos/640/640?r=23',
        createdOn: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 500,
        image: 'https://picsum.photos/640/640?r=233',
        createdOn: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 400,
        image: 'https://picsum.photos/640/640?r=238',
        createdOn: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 500,
        image: 'https://picsum.photos/640/640?r=239',
        createdOn: new Date().toISOString()
      },
    ]
    this.products.set(initProducts)
  }

  addProductToCart(product: Product) {
    console.log('ingresa a metodo padre add to cart')
    this.cartService.addToCart(product)
  }
}
