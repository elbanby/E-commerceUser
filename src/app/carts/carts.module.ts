import { CartComponent } from './componant/cart/cart.component';
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CartComponent]
})
export class CartsModule { }
