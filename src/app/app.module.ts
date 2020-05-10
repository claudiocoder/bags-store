import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuOptiosComponent } from './components/menu-options/menu-options.component';
import { HomeComponent } from './pages/home/home.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProductsComponent } from './components/products/products.component';
import { BannerComponent } from './components/banner/banner.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FotterComponent } from './components/fotter/fotter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenuComponent,
    MenuOptiosComponent,
    HomeComponent,
    AccessoriesComponent,
    BlogComponent,
    ProductsComponent,
    BannerComponent,
    NewsletterComponent,
    FotterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
