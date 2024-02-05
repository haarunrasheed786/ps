import { Component,OnInit } from '@angular/core';
import { CartService} from "../shared service/shared.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartQuantity$.subscribe((quantity) => {
      this.cartQuantity = quantity;
    });
  }
}

