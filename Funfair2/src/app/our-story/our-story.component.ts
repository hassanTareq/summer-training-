import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent implements OnInit {

  constructor() { }
  image=[
    {img:"../../assets/images/story1.jpg"},
    {img:"../../assets/images/story2.jpg"},
    {img:"../../assets/images/story3.jpg"},
    {img:"../../assets/images/story4.jpg"},
    {img:"../../assets/images/story5.jpg"}
  ];
  ngOnInit(): void {
  }

}
