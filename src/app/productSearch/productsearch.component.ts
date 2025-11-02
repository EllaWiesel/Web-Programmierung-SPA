import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductSearchService } from './productsearch.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'an-productsearch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productsearch.component.html',
  styleUrl: './productsearch.component.css'
})
export class ProductsearchComponent implements OnInit{

  products: any[] = [];
  query: string = '';
  successMessage: string = '';

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

  
  sortProducts(order: string) {
    if (order === 'ascending') {
      this.products.sort((a, b) => a.price - b.price);
    } else {
      this.products.sort((a, b) => b.price - a.price);
    }
  }

  onSortChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.sortProducts(value);
  }

  addToWishlist(product:any):void {
    const payload = {
      thumbnail: product.thumbnail,
      title: product.title,
      link: product.link,
      price: product.price,
      rating: product.rating,
      asin: product.asin,
      user: localStorage.getItem('token')
    };

    const wishlistUrl = 'https://bff-webprogrammierung-6322597a0426.herokuapp.com/api/wishlist?thumbnail='+ product.thumbnail + 
                        '&title=' + product.title + 
                        '&link=' + product.link + 
                        '&price=' + product.price + 
                        '&rating=' + product.rating +
                        '&asin=' + product.asin + 
                        '&user=' + product.user;

    this.productService.addToWishlist(wishlistUrl).subscribe({
      next: (response) => {
        console.log('Produkt erfolgreich zur Wunschliste hinzugefügt:', response);
        this.successMessage = `${product.title} wurde zur Wunschliste hinzugefügt.`;
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (error) => {
        console.error('Fehler beim Hinzufügen zur Wunschliste:', error);
      }
    });


  }

}
