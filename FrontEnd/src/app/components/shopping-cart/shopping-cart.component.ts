import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cars : Car[] = []
  i : number;
  constructor(public cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.cartItem.subscribe(data => {
      this.cars = data;
    })
  }

  onDelete(i : number){
    this.cars.splice(i,1);
    this.cartService.setCartData(this.cars);
  }

  validateInput(event : any, i: number){
    const quantity = +event.target.value;
    if ( quantity < 1 ) {
      event.target.value = this.cars[i].quantity;
      return;
    }
    this.QuantityUpdated(quantity, i)
    

  }
  private QuantityUpdated(quantity : number, i: number) {
    this.cars[i].quantity = quantity;
    this.cartService.setCartData(this.cars);
  }

  

}
