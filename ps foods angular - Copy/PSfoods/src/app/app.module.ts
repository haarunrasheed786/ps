import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookEventComponent } from './book-event/book-event.component';
import { CartComponent } from './cart/cart.component';
import { S1productComponent } from './s1product/s1product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { S2productComponent } from './s2product/s2product.component';
import { S3productComponent } from './s3product/s3product.component';
import { S4productComponent } from './s4product/s4product.component';
import { S5productComponent } from './s5product/s5product.component';
import { S6productComponent } from './s6product/s6product.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutUsComponent,
    BookEventComponent,
    CartComponent,
    S1productComponent,
    CheckoutComponent,
    S2productComponent,
    S3productComponent,
    S4productComponent,
    S5productComponent,
    S6productComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
