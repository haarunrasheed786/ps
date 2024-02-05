import { Component } from '@angular/core';
import { CartService } from "../shared service/shared.service";

@Component({
  selector: 'app-s1product',
  templateUrl: './s1product.component.html',
  styleUrl: './s1product.component.css'
})
export class S1productComponent {
  quantity: number=0;

  constructor(private cartService: CartService) {}

  addToCart(quantity: number): void {
    this.cartService.updateCartQuantity(quantity);
  }

}
