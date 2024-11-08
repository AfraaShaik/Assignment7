import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-breakfast-restaurants',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  templateUrl: './breakfast-restaurants.component.html',
  styleUrl: './breakfast-restaurants.component.css'
})
export class BreakfastRestaurantsComponent implements OnInit {

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

    return filtered.filter(res => res.id > 0 && res.id <= 6);
  }

  setType(type: string) {
    this.selectedType = type;
  }

}
