import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  eventName=this.route.snapshot.params['eventName'];
  eventDescription='';
  imgsrc='';
  generalTickets=0;
  vipTickets=0;
  venueDetails='';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit()
  {
    if(this.eventName==='Cold play Concert')
    {
      this.eventName=this.route.snapshot.params['eventName'];
      this.imgsrc='assets/coldplay.jpg';
      this.eventDescription="Join us for an unforgettable night of live music with top artists at the Music Concert 2025. Don't miss out!";
      this.venueDetails="Houck Stadium, 1117 Broadway Street, Cape Girardeau, MO 63701";
    }
    if(this.eventName==='Virtual Art Exhibition')
      {
        this.eventName=this.route.snapshot.params['eventName'];
        this.imgsrc='assets/vart.webp'
        this.eventDescription="Immerse yourself in beautiful art at this Art Exhibition";
        this.venueDetails="The Southeast Missouri State University Art Gallery, 1 University Plaza, Cape Girardeau, MO 63701"
      }
    if(this.eventName==='Mexican Food Festival')
        {
          this.eventName=this.route.snapshot.params['eventName'];
          this.imgsrc='assets/mexican.jpg'
          this.eventDescription="Enjoy delicious and authentic Mexican Food!";
          this.venueDetails="Riverfront Park, Broadway St (Broadway and Water), Cape Girardeau, MO 63701"
        }

  
  }



    submitBooking() {
     alert(`You have successfully booked ${this.generalTickets} General Admission tickets and ${this.vipTickets} VIP tickets!`);
     this.router.navigate(["welcome"])
    }
}
