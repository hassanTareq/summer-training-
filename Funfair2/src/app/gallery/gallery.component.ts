import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  constructor() { }
  carousel = [ 
    {img:"../../assets/images/img1.jpeg"},
    {img:"../../assets/images/img2.jpeg"},
    {img:"../../assets/images/img3.jpeg"},
    {img:"../../assets/images/img4.jpeg"},
    {img:"../../assets/images/img5.jpeg"},
    {img:"../../assets/images/img6.jpeg"},
    {img:"../../assets/images/img7.jpeg"},
    {img:"../../assets/images/img8.jpeg"},
  ];

  hopper = [ 
    {img:"../../assets/images/img9.jpeg"},
    {img:"../../assets/images/img10.jpeg"},
    {img:"../../assets/images/img11.jpeg"},
    {img:"../../assets/images/img12.jpeg"},
    {img:"../../assets/images/img13.jpeg"},
    {img:"../../assets/images/img14.jpeg"},
    {img:"../../assets/images/img15.jpeg"},
    {img:"../../assets/images/img16.jpeg"},
  ];

  waltzer = [ 
    {img:"../../assets/images/img17.jpeg"},
    {img:"../../assets/images/img18.jpeg"},
    {img:"../../assets/images/img19.jpeg"},
    {img:"../../assets/images/img20.jpeg"},
    {img:"../../assets/images/img21.jpeg"},
    {img:"../../assets/images/img22.jpeg"},
    {img:"../../assets/images/img23.jpeg"},
    {img:"../../assets/images/img24.jpeg"},
  ];

  scream = [ 
    {img:"../../assets/images/img25.jpeg"},
    {img:"../../assets/images/img26.jpeg"},
    {img:"../../assets/images/img27.jpeg"},
    {img:"../../assets/images/img28.jpeg"},
    {img:"../../assets/images/img29.jpeg"},
    {img:"../../assets/images/img30.jpg"},
    {img:"../../assets/images/img31.jpg"},
    {img:"../../assets/images/img32.jpg"},
  ];
  

  ngOnInit(): void {
  }

}
