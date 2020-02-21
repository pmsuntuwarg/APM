// tslint:disable-next-line: quotemark
import { Component, OnInit } from "@angular/core";
import { Product } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: Product;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {

  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    this.productService.getProductById(id)
    .subscribe(response => this.product = response[0] || this.product);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
