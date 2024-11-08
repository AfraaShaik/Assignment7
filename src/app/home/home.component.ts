import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  scrollToLast(item: String) {
    const el = document.getElementById(`${item}-end`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToFirst(item: String) {
    const el = document.getElementById(`${item}-start`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  restaurants = [
    {
      name: "Hotel Vdara",
      cuisine: "North Indian • South Indian",
      priceForTwo: "₹1200 for two",
      location: "Governorpet, Vijayawada",
      distance: "0 km",
      rating: "4.2",
      offers: ["Flat 20% off on pre-booking", "Up to 15% off with bank offers"],
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Spice Symphony",
      cuisine: "Chinese • Thai",
      priceForTwo: "₹900 for two",
      location: "Benz Circle, Vijayawada",
      distance: "2 km",
      rating: "4.0",
      offers: ["Flat 10% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Blue Lagoon",
      cuisine: "Seafood • Continental",
      priceForTwo: "₹1500 for two",
      location: "MG Road, Vijayawada",
      distance: "3 km",
      rating: "4.5",
      offers: ["Flat 10% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Veggie Delight",
      cuisine: "Pure Veg • Indian",
      priceForTwo: "₹800 for two",
      location: "Patamata, Vijayawada",
      distance: "4 km",
      rating: "4.3",
      offers: ["Flat 10% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://images.unsplash.com/photo-1483918793747-5adbf82956c4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Grill & Chill",
      cuisine: "BBQ • Fast Food",
      priceForTwo: "₹1000 for two",
      location: "One Town, Vijayawada",
      distance: "5 km",
      rating: "3.9",
      offers: ["Flat 20% off on takeaway", "Special 5%discounts on weekends"],
      imageUrl: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];
  


  constructor(private router: Router) {}

  navigateToRestaurants() {
    this.router.navigate(['/restaurants']); 
  }
  navigateToBreakFastRestaurants() {
    this.router.navigate(['/breakfast']); 
  }
  navigateToFastFoodRestaurants() {
    this.router.navigate(['/fastfood']); 
  }
  
}





