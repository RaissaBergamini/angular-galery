import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GaleryComponent implements OnInit {
  @Input() title: string = '';
  @Input() imgList: string[] = [];
  current: number = 0;
  constructor() {
    console.log(this.imgList.length);
  }

  change_current(number) {
    console.log('clicked');
    if (this.current < this.imgList.length - 1 && this.current > 0) {
      this.current = number;
    }
    console.log(this.current);
  }

  next() {
    console.log('clicked');
    if (this.current < this.imgList.length - 1) {
      this.current++;
    }
    console.log(this.current);
  }

  previous() {
    console.log('clicked');
    if (this.current > 0) {
      this.current--;
    }
    console.log(this.current);
  }
  ngOnInit(): void {}
}
