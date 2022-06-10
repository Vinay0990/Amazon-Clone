import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products!: Product[];
  constructor() {}

  async getProducts() {
    await fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
      });

    return this.products;
  }
}
