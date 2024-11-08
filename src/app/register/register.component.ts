import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationServiceService } from './registration-service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule,NavbarComponent,FooterComponent,RouterLink ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = ''; 
  email = '';
  phone = '';

  constructor(private registrationService: RegistrationServiceService, private router: Router) {}

  onSubmit() {
    const userData = { name: this.name, email: this.email, phone: this.phone };

    this.registrationService.registerUser(userData).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);
        localStorage.setItem('userName', this.name); 

        this.router.navigate(['/login']); 
      },
      error: (error) => {
        console.error('Registration failed:', error);
      },
      complete: () => {
        console.log('Registration request completed');
      }
    });
  }
}
