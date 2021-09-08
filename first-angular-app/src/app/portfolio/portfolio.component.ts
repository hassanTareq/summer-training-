import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public name:string="Hassan Tarek Hassan";
  public id:string="20184817";
  public faculty:string="Computer and Information Technology";
  public age:string="23";
  public major:string="Information System";
  public image:string="../../assets/images/me2.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
