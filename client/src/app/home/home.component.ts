import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images: any[] = [
    {
      image: 'assets/images/slider1.png',
      desc: 'Image1',
    },
    {
      image: 'assets/images/slider2.jpg',
      desc: 'Image1',
    },
    {
      image: 'assets/images/slider3.jpg',
      desc: 'Image1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
