import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems: any[] = [];
  private totalQuantitySubject = new BehaviorSubject<number>(0); // Initialize total quantity as 0
  totalQuantity$ = this.totalQuantitySubject.asObservable(); // Observable for total quantity

  constructor() {}

  addCartItems(item: any,restaurantName: string) {
    const existingItem = this.cartItems.find(cartItem => cartItem.title === item.title);

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      this.cartItems.push({...item, qty: 1,restaurantName:restaurantName});  
    }
    this.updateTotalQuantity(); // Update the total quantity after adding an item
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalQuantity() {
    return this.totalQuantitySubject.value; // Return the latest value of total quantity
  }

  private updateTotalQuantity() {
    // Calculate and update the total quantity
    const totalQuantity = this.cartItems.reduce((total, item) => total + item.qty, 0);
    this.totalQuantitySubject.next(totalQuantity); // Emit the updated quantity
  }
}
