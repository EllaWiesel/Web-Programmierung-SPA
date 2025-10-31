import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductSearchService {
  private apiUrl = 'https://bff-webprogrammierung-6322597a0426.herokuapp.com/api/search?';

  constructor(private http: HttpClient) {}

  searchProducts(query: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl,  { params: { query } });
  }

  
  addToWishlist(url: string, product: any): Observable<any> {
      return this.http.post<any>(url, product);
    }

}
