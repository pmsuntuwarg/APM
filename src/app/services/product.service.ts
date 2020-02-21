import { Product } from '../components/products/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {

  }

  getProducts(filter: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
    .pipe(map(
      response => {
        return response.filter( product => filter === '' || filter === 'undefined'
        ? true
        : product.productName.toLowerCase().includes(filter.toLowerCase()));
      }), catchError(this.handleError));
  }

  getProductById(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
    .pipe(map(response => response.filter(f => f.productId === id)));
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err.message);
  }
}
