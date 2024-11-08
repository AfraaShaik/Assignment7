import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,LoginComponent,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})


export class CartComponent implements OnInit{
  isLoggedIn: boolean = false;
  cartItems:any[]=[];
  userName: string | null = '';
  constructor(public cart:CartService,private router: Router,public dialog: MatDialog){}
  ngOnInit(): void {
      this.cartItems=this.cart.getCartItems();
      if (typeof window !== 'undefined') {
      this.isLoggedIn =!!localStorage.getItem('authToken'); 
        this.userName = localStorage.getItem('userName');
      }
  }
  proceedToPayment() {
    if (this.isLoggedIn) {
      this.router.navigate(['/pay']);
    } else {
      this.showLoginPopup();
    }
  }

  showLoginPopup() {
    this.dialog.open(LoginComponent, {
      width: '800px',
      data: { message: "Please log in to proceed with the payment.",returnUrl: '/cart' }
    });
  }
  inc(title:any){
    this.cartItems=this.cartItems.map((item:any)=>{
      if(item.title===title){
        return{
          ...item,
          qty:item.qty+1
        }
      }
      return item;
    })

  }
  dec(title:any){
    this.cartItems=this.cartItems.map((item:any)=>{
      if(item.title===title){
        return{
          ...item,
          qty:item.qty-1>0?item.qty-1:1
        }
      }
      return item;
    })
  }
  grandTotal(){
    let total:number=0;
    for(let item of this.cartItems){
      total+=(item.qty*item.price)
    }
    return total;
  }
  
  
  remove1(title: any) {
    this.cartItems = this.cartItems.filter((item:any) => item.title !== title);
  }

    logout() {
      localStorage.removeItem('userName');  
      localStorage.removeItem('authToken'); 
  
      this.isLoggedIn = false;
  
      alert("You have logged out successfully.");
  
      this.router.navigate(['/home']);
    }
    
}

