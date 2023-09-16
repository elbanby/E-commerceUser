import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  id: any
  prodId: any = {}
  loading: boolean = false;
  productLenght!: number
  constructor(private activatRoute: ActivatedRoute, private apiServ: ProductService, private route: Router) {
    this.id = this.activatRoute.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.getProductLenght()
    this.getProductById()
  }
  getProductById() {
    this.loading = true
    this.apiServ.getProductById(this.id).subscribe(data => {
      this.loading = false
      this.prodId = data
    }, error => {
      this.loading = false
      alert(error)
    })
  }
  preItem() {
    this.route.navigate(['products', --this.id])
    if (this.id > 0) {
      this.getProductById()
    }
  }
  nextItem() {
    this.route.navigate(['products', ++this.id])
    if (this.id < this.productLenght) {
      this.getProductById()
    }
  }
  getProductLenght() {
    this.apiServ.getAllProducts().subscribe(res => {
      let allproduct = res
      this.productLenght = allproduct.length
    })
  }

}
