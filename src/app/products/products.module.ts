import { RouterModule } from '@angular/router';
import { AllproductsComponent } from './componant/allproducts/allproducts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdetailsComponent } from './componant/productdetails/productdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './componant/product/product.component';



@NgModule({
    declarations: [
        ProductdetailsComponent,
        AllproductsComponent,
        ProductComponent
    ],
    exports: [ProductdetailsComponent, AllproductsComponent ,RouterModule],
    imports: [CommonModule, HttpClientModule, SharedModule]
})
export class ProductsModule { }
