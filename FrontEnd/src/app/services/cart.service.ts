import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../models/car.model'
import { carForm } from '../models/carForm.model';
import { Contact } from '../models/contact.model';



@Injectable({
  providedIn: 'root'
})
export class CartService {
placeholder = [];
cartItem = new BehaviorSubject([]);

  constructor() { 
        const ls = this.getCartData();
        if (ls) this.cartItem.next(ls);
    }

  addItem(car : Car) {
      const ls = this.getCartData();

      let exist : Car

      if(ls) 
      exist = ls.find((item) => {
          return item.id = car.carId;
      });

      if(exist) {
          exist.quantity ++;
          this.setCartData(ls);
      }

      else {
          if(ls){
              const newData = [...ls,car];
              this.setCartData(newData);
              this.cartItem.next(this.getCartData());
          }
        this.placeholder.push(car);
        this.setCartData(this.placeholder);
        this.cartItem.next(this.placeholder);
      }
  }
  setCartData(data : any){
      localStorage.setItem('cart',JSON.stringify(data));
    }

    getCartData() {
        return JSON.parse(localStorage.getItem('cart'));
    }

  

  
  
}