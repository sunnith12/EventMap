import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username=""
  password=""
  errorMessage="Invalid Credentials"
  invalidLogin=false



  constructor(private router: Router,private http: HttpClient,private service:WelcomeDataService){}

  ngOnInit()
  {

  }


  login() {
    const loginData = {
      userName: this.username,
      password: this.password
    };

    this.http.post('http://localhost:8080/login', loginData, {
      responseType: 'text' as 'json'
    }).subscribe({
      next: response => {
        alert(response);
        this.router.navigate(['welcome'])
      },
      error: err => {
        alert("Login failed.");
        console.error(err);
      }
    });
  }

  registerUser()
  {
    this.router.navigate(['createAccount'])
  }

}
