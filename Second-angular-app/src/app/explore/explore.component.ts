import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  serviceData =[
   { iconclass : "fas fa-gem fa-5x",
    heading: "Study Theme",
    description:"Our themes are updated regularly to keep bug free!"
   },
   { iconclass : "fas fa-laptop fa-5x",
    heading: "Up To Date",
    description:"Our themes are updated regularly to keep bug free!"
   },
   { iconclass : "fas fa-globe fa-5x",
    heading: "Ready To Publish",
    description:"Our themes are updated regularly to keep bug free!"
   },
   { iconclass : "fas fa-heart fa-5x",
    heading: "Made With Love",
    description:"Our themes are updated regularly to keep bug free!"
   }
  ];

  exploreData =[
    {
      img:"../../assets/img/portfolio/thumbnails/1.jpg",
      title:"Explore"},
    {
      img:"../../assets/img/portfolio/thumbnails/2.jpg",
      title:"Experience"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
