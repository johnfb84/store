import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)
  private url: string = 'https://api.escuelajs.co/api/v1/products'

  constructor() { }

  getProducts() {
    return this.http.get<Product[]>(this.url)
  }

  getOneProduct(id: string) {
    return this.http.get<Product>(`${this.url}/${id}`)
  }
}
