import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemInCart: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.cartItem.subscribe(cart => {this.itemInCart = cart.length})
  }
}
