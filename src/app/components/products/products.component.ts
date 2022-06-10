import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  data!: Product[];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().then((d) => {
      this.data = d;

      console.log(this.data[0].random, this.data[0].title);
    });
  }
}
