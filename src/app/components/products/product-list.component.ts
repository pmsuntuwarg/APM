import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: Product[];
  errorMessage: string;

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.productService.getProducts(this.listFilter).subscribe({
      next: res => this.products = res,
      error: err => this.errorMessage = err
    });
  }

  getFilteredProductslist(): void {
    console.log('called');
    this.productService.getProducts(this.listFilter).subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List ${message}`;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
