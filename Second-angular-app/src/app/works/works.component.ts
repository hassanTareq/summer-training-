import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  workimages =[
    {imageUrl:"../../assets/img/portfolio/thumbnails/1.jpg"},
    {imageUrl:"../../assets/img/portfolio/thumbnails/2.jpg"},
    {imageUrl:"../../assets/img/portfolio/thumbnails/3.jpg"},
    {imageUrl:"../../assets/img/portfolio/thumbnails/4.jpg"},
    {imageUrl:"../../assets/img/portfolio/thumbnails/5.jpg"},
    {imageUrl:"../../assets/img/portfolio/thumbnails/6.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
