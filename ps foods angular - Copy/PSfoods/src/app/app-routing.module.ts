import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookEventComponent } from './book-event/book-event.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { S1productComponent } from './s1product/s1product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {S2productComponent} from './s2product/s2product.component';
import {S3productComponent} from './s3product/s3product.component';
import {S4productComponent} from './s4product/s4product.component';
import {S5productComponent} from './s5product/s5product.component';
import {S6productComponent} from './s6product/s6product.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'book-event',component:BookEventComponent},
  {path:'cart',component:CartComponent},
  {path:'s1product',component:S1productComponent},
  {path:'checkout',component:CheckoutComponent},

  {path:'s2product',component:S2productComponent},
  {path:'s3product',component:S3productComponent},
  {path:'s4product',component:S4productComponent},
  {path:'s5product',component:S5productComponent},
  {path:'s6product',component:S6productComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
