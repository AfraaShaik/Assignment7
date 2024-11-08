import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants = [
    {
      id: 1,
      name: "Idli House",
      cuisine: "South Indian",
      priceForTwo: "₹200 for two",
      location: "MG Road, Bangalore",
      distance: "0 km",
      rating: "4.5",
      offers: ["Flat 10% off on pre-booking", "Free delivery on orders above ₹300"],
      imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "veg",
      dishes: [
        {
          title: "Dosa",
          src: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg",
          qty: 1,
          price: 70
        },
        {
          title: "Poori",
          src: "https://www.awesomecuisine.com/wp-content/uploads/2015/01/Yellow-Pumpkin-Poori-Parangikai-Puri.jpg",
          qty: 1,
          price: 80
        }
      ]
    },
    {
      id: 2,
      name: "Dosa Corner",
      cuisine: "South Indian",
      priceForTwo: "₹250 for two",
      location: "Jayanagar, Bangalore",
      distance: "1 km",
      rating: "4.3",
      offers: ["Flat 15% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://images.unsplash.com/photo-1665660710687-b44c50751054?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "veg",
      dishes: [
        {
          title: "Idli",
          src: "https://www.cookwithmanali.com/wp-content/uploads/2020/04/Idli.jpg",
          qty: 1,
          price: 50
        },
        {
          title: "Vada",
          src: "https://www.cookwithmanali.com/wp-content/uploads/2020/04/Medu-Vada.jpg",
          qty: 1,
          price: 60
        }
      ]
    },
    {
      id: 3,
      name: "Chapati Delight",
      cuisine: "North Indian",
      priceForTwo: "₹300 for two",
      location: "Indiranagar, Bangalore",
      distance: "2 km",
      rating: "4.0",
      offers: ["Buy 1 Get 1 on Chapatis", "Free dessert with orders above ₹500"],
      imageUrl: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg",
      dishes: [
        {
          title: "Chapati",
          src: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Chapati.jpg",
          qty: 1,
          price: 30
        },
        {
          title: "Paneer Butter Masala",
          src: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Paneer-Butter-Masala.jpg",
          qty: 1,
          price: 150
        }
      ]
    },
    {
      id: 4,
      name: "Breakfast Bistro",
      cuisine: "Continental",
      priceForTwo: "₹400 for two",
      location: "Brigade Road, Bangalore",
      distance: "4 km",
      rating: "4.6",
      offers: ["Flat 20% off on breakfast combos", "Free delivery on orders above ₹600"],
      imageUrl: "https://images.unsplash.com/photo-1528699633788-424224dc89b5?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg",
      dishes: [
        {
          title: "Pancakes",
          src: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Pancakes.jpg",
          qty: 1,
          price: 120
        },
        {
          title: "Omelette",
          src: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Omelette.jpg",
          qty: 1,
          price: 100
        }
      ]
    },
    
    {
      id: 5,
      name: "Morning Maniac",
      cuisine: "Continental",
      priceForTwo: "₹400 for two",
      location: "Brigade Road, Bangalore",
      distance: "4 km",
      rating: "4.6",
      offers: ["Flat 20% off on breakfast combos", "Free delivery on orders above ₹600"],
      imageUrl: "https://images.unsplash.com/photo-1528699633788-424224dc89b5?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg",
      dishes: [
        {
          title: "Pancakes",
          src: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Pancakes.jpg",
          qty: 1,
          price: 120
        },
        {
          title: "Omelette",
          src: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Omelette.jpg",
          qty: 1,
          price: 100
        }
      ]
    },
    {
      id: 6,
      name: "Morning Maniac",
      cuisine: "Continental",
      priceForTwo: "₹400 for two",
      location: "Brigade Road, Bangalore",
      distance: "4 km",
      rating: "4.6",
      offers: ["Flat 20% off on breakfast combos", "Free delivery on orders above ₹600"],
      imageUrl: "https://images.unsplash.com/photo-1528699633788-424224dc89b5?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg",
      dishes: [
        {
          title: "Pancakes",
          src: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Pancakes.jpg",
          qty: 1,
          price: 120
        },
        {
          title: "Omelette",
          src: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Omelette.jpg",
          qty: 1,
          price: 100
        }
      ]
    },
    {
      id: 7,
      name: "Burger Palace",
      cuisine: "Fast Food",
      priceForTwo: "₹500 for two",
      location: "MG Road, Bangalore",
      distance: "0 km",
      rating: "4.5",
      offers: ["Flat 20% off on first order", "Free fries with every burger"],
      imageUrl: "https://images.unsplash.com/photo-1604467707321-70d5ac45adda?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg",
      dishes: [
        {
          title: "Classic Beef Burger",
          src: "https://images.unsplash.com/photo-1604147706289-6435d227ffef?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 250
        },
        {
          title: "Cheese Loaded Burger",
          src: "https://images.unsplash.com/photo-1576675785018-4b55f27c3b39?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 300
        },
        {
          title: "Chicken Wings",
          src: "https://images.unsplash.com/photo-1603034897033-69d4332f05f3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 150
        }
      ]
    },
    {
      id: 8,
      name: "Pizza Hub",
      cuisine: "Italian",
      priceForTwo: "₹600 for two",
      location: "Jayanagar, Bangalore",
      distance: "1 km",
      rating: "4.7",
      offers: ["Buy 1 Get 1 on medium pizzas", "Free garlic bread with every order"],
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg",
      dishes: [
        {
          title: "Margherita Pizza",
          src: "https://images.unsplash.com/photo-1601920321235-d58e07629f68?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 250
        },
        {
          title: "Pepperoni Pizza",
          src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 300
        },
        {
          title: "Veggie Delight Pizza",
          src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 270
        }
      ]
    },
    {
      id: 9,
      name: "Sandwich Express",
      cuisine: "Fast Food",
      priceForTwo: "₹300 for two",
      location: "Indiranagar, Bangalore",
      distance: "2 km",
      rating: "4.3",
      offers: ["Flat 10% off on online orders", "Free drink with every sandwich"],
      imageUrl: "https://images.unsplash.com/photo-1586190837179-1d2e23401a7c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "veg",
      dishes: [
        {
          title: "Grilled Cheese Sandwich",
          src: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f9b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 120
        },
        {
          title: "Veggie Delight Sandwich",
          src: "https://images.unsplash.com/photo-1552332386-7bff98e800c7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 130
        }
      ]
    },
    {
      id: 10,
      name: "Fries Factory",
      cuisine: "Fast Food",
      priceForTwo: "₹250 for two",
      location: "Koramangala, Bangalore",
      distance: "1.5 km",
      rating: "4.2",
      offers: ["Flat 15% off on large fries", "Free dipping sauce with every order"],
      imageUrl: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "veg",
      dishes: [
        {
          title: "Classic Fries",
          src: "https://images.unsplash.com/photo-1589182371271-44af4e54b2ed?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 100
        },
        {
          title: "Cheesy Fries",
          src: "https://images.unsplash.com/photo-1559631600-1e76d911d7b6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
          qty: 1,
          price: 120
        }
      ]
    },
    {
      id: 11,
      name: "Taco Town",
      cuisine: "Mexican",
      priceForTwo: "₹400 for two",
      location: "Whitefield, Bangalore",
      distance: "3 km",
      rating: "4.4",
      offers: ["Flat 10% off on taco combos", "Free nachos with orders above ₹500"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      id: 12,
      name: "Taco Town",
      cuisine: "Mexican",
      priceForTwo: "₹400 for two",
      location: "Whitefield, Bangalore",
      distance: "3 km",
      rating: "4.4",
      offers: ["Flat 10% off on taco combos", "Free nachos with orders above ₹500"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    }
    

  ];
  
  constructor() { }


  getRestaurants(): Observable<any[]> {
    return of(this.restaurants); // Wrap the data in `of()` to return an Observable
  }

  getRestaurantById(id: number) {
    return this.restaurants.find(restaurant => restaurant.id === id);
  }
}
