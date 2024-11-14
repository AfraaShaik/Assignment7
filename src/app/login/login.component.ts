import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegistrationServiceService } from '../register/registration-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  phone = '';

  constructor(
    private registrationService: RegistrationServiceService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.phone) {
      alert("Please enter a phone number.");
      return;
    }

    this.registrationService.checkPhoneNumber(this.phone).subscribe({
      next: (users) => {
        if (users.length > 0) {
          const user = users[0];
          localStorage.setItem('authToken', user.token);
          localStorage.setItem('userId', user.phone);
          localStorage.setItem('userName', user.name);

          
          this.router.navigate(['/home']);
        } else {
          alert("User not found. Please register an account.");
        }
      },
      error: (error) => {
        console.error("Error checking phone number:", error);
        alert("An error occurred while checking the phone number.");
      }
    });
  }
}