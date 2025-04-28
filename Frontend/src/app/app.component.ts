import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from './login/login.component';


@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WelcomeComponent,LoginComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message='Welcome  here'
}
