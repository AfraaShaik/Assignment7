import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterLink],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent implements OnInit {
  /*
  restaurants = [
    {
      id: 13,
      name: "Balaji Santosh Family Dhaba",
      cuisine: "North Indian • South Indian",
      priceForTwo: "₹1200 for two",
      location: "Governorpet, Vijayawada",
      distance: "0 km",
      rating: "4.2",
      offers: ["Flat 20% off on pre-booking", "Up to 15% off with bank offers"],
      imageUrl: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "veg" ,
      dishes: [
        {
          title: "Chicken Tacos",
          src: "https://images.unsplash.com/photo-1559564471-b2236f8a91f0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 150
        },
        {
          title: "Beef Tacos",
          src: "https://images.unsplash.com/photo-1552332386-7bff98e800c7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 180
        }
      ]
    },
    {
      id: 14,
      name: "Eat Street",
      cuisine: "Chinese • Thai",
      priceForTwo: "₹900 for two",
      location: "Benz Circle, Vijayawada",
      distance: "2 km",
      rating: "4.0",
      offers: ["Flat 10% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg",
      dishes: [
        {
          title: "Chicken Tacos",
          src: "https://images.unsplash.com/photo-1559564471-b2236f8a91f0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 150
        },
        {
          title: "Beef Tacos",
          src: "https://images.unsplash.com/photo-1552332386-7bff98e800c7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 180
        }
      ]
    },
    {
      id: 15,
      name: "Blue Fox",
      cuisine: "Seafood • Continental",
      priceForTwo: "₹1500 for two",
      location: "MG Road, Vijayawada",
      distance: "3 km",
      rating: "4.5",
      offers: ["Flat 10% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1669261880961-ea68f9a2b7f2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg",
      dishes: [
        {
          title: "Chicken Tacos",
          src: "https://images.unsplash.com/photo-1559564471-b2236f8a91f0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 150
        },
        {
          title: "Beef Tacos",
          src: "https://images.unsplash.com/photo-1552332386-7bff98e800c7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 180
        }
      ] 

    },
    {
      id: 16,
      name: "Dawat Family Restaurant",
      cuisine: "Pure Veg • Indian",
      priceForTwo: "₹800 for two",
      location: "Patamata, Vijayawada",
      distance: "4 km",
      rating: "4.3",
      offers: ["Flat 10% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1695029504256-054d9c0e66e9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "veg" ,
      dishes: [
        {
          title: "Chicken Tacos",
          src: "https://images.unsplash.com/photo-1559564471-b2236f8a91f0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 150
        },
        {
          title: "Beef Tacos",
          src: "https://images.unsplash.com/photo-1552332386-7bff98e800c7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 180
        }
      ]
    },
    {
      id: 17,
      name: "Harika Royal Restaurant",
      cuisine: "Biryani, South Indian",
      priceForTwo: "₹800 for two",
      location: "Labbipet",
      distance: "20-25 mins",
      rating: "4.1",
      offers: ["one Free delivery", "40% OFF UPTO ₹80"],
      imageUrl: "https://storage.googleapis.com/a1aa/image/OWNT7DFgxeTPdSJcJX8f6PBD8TysbMjxoDj2qOwSyPfVZLdnA.jpg",
      type: "veg" ,
      dishes: [
        {
          title: "Chicken Tacos",
          src: "https://images.unsplash.com/photo-1559564471-b2236f8a91f0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 150
        },
        {
          title: "Beef Tacos",
          src: "https://images.unsplash.com/photo-1552332386-7bff98e800c7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 180
        }
      ]
    },
    
    {
      id: 18,
      name: "Imperial Multi Cuisine",
      cuisine: "North Indian, Chinese, Biryani",
      priceForTwo: "₹1000 for two",
      location: "Benz Circle and Auto Nagar",
      distance: "25-30 mins",
      rating: "3.9",
      offers: ["one Free delivery", "₹75 OFF ABOVE ₹199"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg" 
      dishes: [
        {
          title: "Chicken Tacos",
          src: "https://images.unsplash.com/photo-1559564471-b2236f8a91f0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 150
        },
        {
          title: "Beef Tacos",
          src: "https://images.unsplash.com/photo-1552332386-7bff98e800c7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 180
        }
      ]
    },
    
  ];
  */
  restaurants: any[] = [];
  selectedType: string = 'all'; 
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants = data;
    });
  }
  get filteredRestaurants() {
    let filtered = this.restaurants;

    if (this.selectedType === 'veg') {
      filtered = filtered.filter(res => res.type === 'veg');
    } else if (this.selectedType === 'non-veg') {
      filtered = filtered.filter(res => res.type === 'non-veg');
    }

    return filtered.filter(res => res.id >= 13 && res.id <= 18);
  }

setType(type: string) {
  this.selectedType = type;
}
}
