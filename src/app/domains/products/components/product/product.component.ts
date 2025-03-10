import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //img = 'https://picsum.photos/640/640?r=' + Math.random()
  @Input({ required: true }) product!: Product

  @Output() addToCart = new EventEmitter<Product>()

  addToCartHandler() {
    console.log("click from child")
    this.addToCart.emit(this.product)
  }
}
