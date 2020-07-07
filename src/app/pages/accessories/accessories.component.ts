import { Component, OnInit } from '@angular/core';
import { data } from '../../data/dummie.fixture';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {
  dataArray;
  constructor() { }

  ngOnInit(): void {
    this.dataArray = data;
  }

}
