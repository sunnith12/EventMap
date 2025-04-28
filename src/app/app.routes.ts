import { WelcomeComponent } from './welcome/welcome.component';

import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { BookingComponent } from './booking/booking.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SupportComponent } from './support/support.component';



export const routes: Routes = [


{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'welcome', component: WelcomeComponent},
{path: 'booking/:eventName', component: BookingComponent},
{path: 'createAccount', component:CreateAccountComponent},
{path: 'aboutUs', component: AboutUsComponent},
{path: 'support', component: SupportComponent},
{path: '**', component: ErrorComponent}


];

