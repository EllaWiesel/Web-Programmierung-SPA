import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductSearchService } from './productsearch.service';




@Component({
  selector: 'an-productsearch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productsearch.component.html',
  styleUrl: './productsearch.component.css'
})
export class ProductsearchComponent implements OnInit{

  products: any[] = [];
  query: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductSearchService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      if (this.query) {
        this.productService.searchProducts(this.query).subscribe({
          next: (data) => this.products = data,
          error: () => console.error('Fehler beim Abrufen der Produkte')
        });
      }
    });
  }


}
