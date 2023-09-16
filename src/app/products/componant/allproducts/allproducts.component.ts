import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  products: any[] = []
  categoris: any[] = []
  loading: boolean = false
  cartItem: any[] = []
  constructor(private apiServ: ProductService) { }

  ngOnInit(): void {
    this.doGetAllProduct();
    this.getCatogris();
    // this.getCatogry();
  }
  fillterCategory(event: any) {
    let value = event.target.value;
    (value === 'all') ? this.doGetAllProduct() : this.getCatogry(value)
  }
  doGetAllProduct() {
    this.loading = true
    this.apiServ.getAllProducts().subscribe(data => {
      this.products = data
      this.loading = false
    }, Error => {
      alert('error')
    })
  }
  getCatogris() {
    this.loading = true
    this.apiServ.getCatogris().subscribe((data) => {
      this.categoris = data
      this.loading = false
    })
  }
  getCatogry(KewWord: string) {
    console.log(KewWord)
    this.loading = true
    this.apiServ.getCatogry(KewWord).subscribe(data => {
      this.products = data;
      this.loading = false
    })
  }
  addItemtoCard(event: any) {
    if ("cart" in localStorage) {
      this.cartItem = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartItem.find(item => item.item.id === event.item.id)
      if (exist) {
        alert("product is alredy in your cart")
        console.log(exist)
      } else {
        this.cartItem.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartItem))
      }
    } else {
      this.cartItem.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartItem))
    }
  }
}
