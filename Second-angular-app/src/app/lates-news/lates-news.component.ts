import { Component, OnInit } from '@angular/core';
import { LatestnewsService } from '../latestnews.service';
@Component({
  selector: 'app-lates-news',
  templateUrl: './lates-news.component.html',
  styleUrls: ['./lates-news.component.css']
})
export class LatesNewsComponent implements OnInit {

  news :any=[];
  constructor(public latestnews:LatestnewsService) { }

  ngOnInit(): void {
   this.latestnews.getEgyptNews().subscribe((data: any)=>{
   this.news=data.articles;
    console.log(this.news);
   })
  }

}
/*
subscribe((data)=>{
  console.log('');
})*/