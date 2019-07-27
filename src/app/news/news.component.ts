import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(private http: HttpClient) { }
  httpdata;
  ngOnInit() {
     this.http.get('https://reqres.in/api/users?page=1')
     .subscribe((data) => this.displaydata(data));

    }
  displaydata(data) {this.httpdata = data;}
}