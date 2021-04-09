import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Gallery';
  imgList: string[] = [];
  setImageList(event) {
    console.log(event);
    this.imgList = event;
  }
}
