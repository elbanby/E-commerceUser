import { CartComponent } from './carts/componant/cart/cart.component';
import { AllproductsComponent } from './products/componant/allproducts/allproducts.component';
import { ProductdetailsComponent } from './products/componant/productdetails/productdetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , component:AllproductsComponent},
  {path:'products' , component:AllproductsComponent },
  {path:'products/:id' , component:ProductdetailsComponent},
  {path:'carts' , component:CartComponent},
  {path:'**' , redirectTo:'' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
