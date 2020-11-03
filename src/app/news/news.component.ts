import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  fetchedNews: any=[];
 

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=f35c70066b074e7da22900b24571995c').subscribe((data)=>{
      console.log(data);
      
  
      this.fetchedNews = [...data["articles"]];
 
    })
  }
}
