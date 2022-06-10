import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ImageService } from './image.service';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    ContactComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [ImageService, ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
