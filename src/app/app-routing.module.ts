import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { HomeComponent } from './pages/home/home.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'accesories',
        component: AccessoriesComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
