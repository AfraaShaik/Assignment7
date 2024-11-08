import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(public cart : CartService) {} 
  totalQuantity: number = 0;

  ngOnInit(): void {
    this.cart.totalQuantity$.subscribe(quantity => {
      this.totalQuantity = quantity;
    });
  }
}
