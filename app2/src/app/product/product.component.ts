import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  products: Product[] = [];

  selectedProduct?: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.products = this.productService.getPRODUCTS();
  }
}
