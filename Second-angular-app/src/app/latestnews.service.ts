import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatestnewsService {

  constructor(public httpclient : HttpClient) { }
  
  getEgyptNews(){
    try{
      return this.httpclient.get("https://newsapi.org/v2/top-headlines?country=eg&apiKey=6fd87dcf3462446da49bc72b7f5082a8");
    }catch(err: any){
      return err.message;
    }
  }
}
