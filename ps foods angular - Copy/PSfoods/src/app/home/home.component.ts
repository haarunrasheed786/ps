// home.component.ts

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu: any;

  // testimonials = [
  //   { image: 'assets/teena 1.jpeg', alt: '', review: 'Budget friendly lunch with yummy varieties and not the same boring lunch everyday.', visible: true },
  //   { image: 'assets/john 1.jpg', alt: 'Client 2', review: 'I just love the  taste of this lunch box. The food quality and hygiene are really commendable.', visible: true },
  //   { image: 'assets/jack 1.jpg', alt: 'Client 3', review: 'I cant wait for my lunch box daily. Super food,  great taste and best, it does not pinch my pockett.', visible: false },
  // ];
  //
  // currentIndex: number = 0;
  // currentSetIndex = 0;

  constructor() {
    // Initialize 'menu' property here if needed.
  }

  ngOnInit() {
    // this.showTestimonials();
    // Perform additional initialization if needed.
  }

  // showTestimonials(): void {
  //   setInterval(() => {
  //     // Set the visibility of the current set of testimonials to false
  //     this.testimonials.slice(this.currentSetIndex, this.currentSetIndex + 2).forEach(testimonial => testimonial.visible = false);
  //
  //     // Increment the counter and wrap around if needed
  //     this.currentSetIndex = (this.currentSetIndex + 2) % this.testimonials.length;
  //
  //     // Set the visibility of the next set of testimonials to true
  //     this.testimonials.slice(this.currentSetIndex, this.currentSetIndex + 2).forEach(testimonial => testimonial.visible = true);
  //   }, 2000); // Adjust the interval (milliseconds) for scrolling
  // }

}










