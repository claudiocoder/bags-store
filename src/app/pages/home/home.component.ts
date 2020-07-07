import { Component, OnInit } from '@angular/core';
import { data } from '../../data/dummie.fixture';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataArray;
  constructor() {}

  ngOnInit(): void {
    this.dataArray = data;
  }
}
