import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Hellobean
{
  constructor(public message:string){};
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeMessage()
  {
    return this.http.get<Hellobean>('http://localhost:8080/hello');
  }

}
