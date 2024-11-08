import { Component ,OnInit} from '@angular/core';
import { RestaurantService } from '../../restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart.service';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
@Component({
  selector: 'app-resview',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent],
  templateUrl: './resview.component.html',
  styleUrl: './resview.component.css'
})
export class ResviewComponent {
  restaurant: any;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    public cart : CartService
  ) { }
  count:any
  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurant = this.restaurantService.getRestaurantById(id);
    this.count=this.cart.getCartItems();
  }
  cart1(item:any,restaurantName:string){
    console.log(item)
    this.cart.addCartItems(item,restaurantName)
  }
}
