import { Component } from '@angular/core';

export interface Product {
  image: string;
  price: number | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    { image: 'assets/product1.png', price: 1999 },
    { image: '', price: null },
    { image: '', price: null }
  ];
}
