import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AccountDetails {
  userName: string;
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = 'http://localhost:8080/register';

  constructor(private http: HttpClient) {}

  register(account: AccountDetails) {
    return this.http.post(this.apiUrl, account);
  }
}
