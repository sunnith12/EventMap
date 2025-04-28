import { Component } from '@angular/core';
import { ActivatedRoute,RouterLink,Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Hellobean, WelcomeDataService } from '../service/data/welcome-data.service';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ NgIf,NgFor, FormsModule,HttpClientModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private router: Router, private service:WelcomeDataService){

  }
  zipCode: string = '';
  eventtrue=true;
  events: any[] = []; // This will hold the list of events based on the search

  // Your OpenCage API key
  apiKey: string = '1cf2456c06754838b304922788ab2bd2'; // Replace with your API key from OpenCage

  // Function to get the city based on zip code
  async getCityByZip(zipCode: string): Promise<string> {
    const countryCode = 'US'; // United States country code
    if(zipCode.length>5)
    {
      alert("Please Enter a valid Zip Code")
      return "null";
    }

    const url = `https://api.opencagedata.com/geocode/v1/json?q=${zipCode}&key=${this.apiKey}&countrycode=${countryCode}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
  
        if (data.results && data.results.length > 0) {
          const location = data.results[0];
          console.log(location);
          const finalloc = location.formatted; // Shows the formatted location
          console.log(finalloc);
          return finalloc;
          
        } else {
          console.log('No results found');
          alert('No results found for the provided zip code');
          return "Noloc";
        }
        
      }
      catch(error){
        console.error('Error:', error);
        alert('An error occurred while fetching the location');
        return "Noloc"
      };
      
  }

  // Function that gets called on search
  async searchEvent(): Promise<void> {
    if (this.zipCode) {
      const loc=await this.getCityByZip(this.zipCode);
      console.log(loc);
      console.log(typeof loc);
      alert(`Location set to ${loc}`);
      if (loc.includes("Cape Girardeau, MO")){ // Fetch city for the provided zip code
      console.log("hello");
      // Example of adding dummy events
      this.events = [
        { name: 'Cold play Concert', date: '2025-05-01', location: 'Cape Girardeau, MO',src:"assets/coldplay.jpg" },
        { name: 'Virtual Art Exhibition', date: '2025-05-03', location: 'Cape Girardeau, MO',src:"assets/vart.webp" },
        { name: 'Mexican Food Festival', date: '2025-05-05', location: 'Cape Girardeau, MO',src:"assets/mexican.jpg" },
      ];
    }
    else if (loc.includes("Chesterfield, MO"))
    {
      this.events = [
        { name: 'Chain smokers Concert', date: '2025-05-01', location: 'Chesterfield, MO' },
        { name: '3D Art Exhibition', date: '2025-05-03', location: 'Chesterfield, MO' },
        { name: 'Indian Food Festival', date: '2025-05-05', location: 'Chesterfield, MO' }
      ];
    }
    else if (loc.includes("Saint Charles, MO"))
      {
        this.events = [
          { name: 'Taylor swift Concert', date: '2025-05-01', location: 'Saint charles, MO' },
          { name: 'Dance Event', date: '2025-05-03', location: 'Saint charles, MO' },
          { name: 'Japanese Food Festival', date: '2025-05-05', location: 'Saint charles, MO' }
        ];
      }
    else{
      this.events = [
        {name:'No Events avaliable',date:'',location:'', src:"assets/Noeve.webp"}
      ];
      this.eventtrue=false;
    }
    } else {
      alert('Please enter a zip code.');
    }
  }

  bookEvent(eventname: string )
  {
      this.router.navigate(['booking',eventname]);
  }

  getMessage()
  {
      console.log(this.service.executeMessage());
      this.service.executeMessage().subscribe(
        response => this.handleSuccessfulResponse(response)
      );
  }

  handleSuccessfulResponse(response : Hellobean)
  {
    console.log(response.message);
  }

  signOut()
  {
    this.router.navigate([""]);
  }

  aboutUS()
  {
    this.router.navigate(["aboutUs"]);
  }

}

