import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterLink } from '@angular/router';

import { RestaurantService } from '../../restaurant.service';





@Component({
  selector: 'app-fastfood-restaurants',
  standalone: true,
  imports: [CommonModule,NavbarComponent, RouterLink],
  templateUrl: './fastfood-restaurants.component.html',
  styleUrl: './fastfood-restaurants.component.css'
})

export class FastfoodRestaurantsComponent implements OnInit {

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

    return filtered.filter(res => res.id >= 7 && res.id <= 12);
  }

  setType(type: string) {
    this.selectedType = type;
  }

}

