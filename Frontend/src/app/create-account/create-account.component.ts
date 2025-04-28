import { Component } from '@angular/core';
import { AccountService,AccountDetails } from '../service/account.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  userName: string = '';
  email: string = '';
  password: string = '';

  constructor(private accountService: AccountService, private router: Router) {}

  register() {
    const newAccount: AccountDetails = {
      userName: this.userName,
      password: this.password,
      email: this.email
    };

    this.accountService.register(newAccount).subscribe({
      next: response => {
        alert("Registration successful!");
        console.log(response);
        this.router.navigate(['login']);
      },
      error: error => {
        alert("Registration failed!");
        console.error(error);
      }
    });
  }

}

