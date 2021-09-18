import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  activities=[
    {
      img:"../../assets/images/Bubbles.jpg",
      title:"Bubbles Station",
      paragraph:"Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content."
    },
    {
      img:"../../assets/images/BoulderingWall.jpg",
      title:"Bouldering Wall",
      paragraph:"Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content."
    },
    {
      img:"../../assets/images/BumperCar.jpg",
      title:"Bumper Cars",
      paragraph:"Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content."
    },
    {
      img:"../../assets/images/Trampolines.jpg",
      title:"Trampolines",
      paragraph:"Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content."
    },
    {
      img:"../../assets/images/FacePainting.jpg",
      title:"Face Painting",
      paragraph:"Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content."
    },
    {
      img:"../../assets/images/FairRiding.jpg",
      title:"Fair Rides",
      paragraph:"Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content."
    }
  ];

  sponsors=[
    {img:"../../assets/images/sponsor1.png"},
    {img:"../../assets/images/sponsor2.png"},
    {img:"../../assets/images/sponsor5.png"},
    {img:"../../assets/images/sponsor4.png"}
  ];
  ngOnInit(): void {
  }

}
