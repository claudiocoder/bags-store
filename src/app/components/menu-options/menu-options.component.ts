import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.scss'],
})
export class MenuOptiosComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirect(path): void {
    this.router.navigate([`/${path}`]);
  }
}
