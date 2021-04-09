import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scrapper',
  templateUrl: './scrapper.component.html',
  styleUrls: ['./scrapper.component.css'],
})
export class ScrapperComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @Output() gotImages = new EventEmitter<string[]>();
  response: string[] = [];
  values: string = '';

  onKey(value: string) {
    this.values += value;
  }

  getImages(url) {
    const headers = { 'Content-Type': 'application/json' };
    console.log(this.values);
    this.http
      .post<any>(
        'http://localhost:3001/scrap',
        {
          url: url, //'https://unsplash.com/',
        },
        { headers }
      )
      .subscribe((data) => {
        this.response = data.results;
        this.gotImages.emit(this.response);
      });
  }
  ngOnInit(): void {}
}
