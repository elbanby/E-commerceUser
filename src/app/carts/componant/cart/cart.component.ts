import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItem: any[] = [];
  total = 0
  wellDone:boolean = false;
  constructor(private cartser:CartService) { }

  ngOnInit(): void {
    this.getProductscats();
  }
  getProductscats() {
    if ("cart" in localStorage) {
      this.cartItem = JSON.parse(localStorage.getItem("cart")!)
    }
    this.getPriceTotal();
    console.log(this.cartItem)
  }

  minsItem(index: number) {
    this.cartItem[index].quantity--
    localStorage.setItem("cart", JSON.stringify(this.cartItem))
    this.getPriceTotal();
  }
  plusItem(index: number) {
    this.cartItem[index].quantity++
    localStorage.setItem("cart", JSON.stringify(this.cartItem))
    this.getPriceTotal();
  }
  dedectMyValue(){
    localStorage.setItem("cart", JSON.stringify(this.cartItem))
  }
  getPriceTotal() {
    this.total =0
    for (let x in this.cartItem) {
      this.total += this.cartItem[x].item.price * this.cartItem[x].quantity

    }
  }
  delete(index:number){
    this.cartItem.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(this.cartItem))
    this.getPriceTotal()
  }
  clearAllProduct(){
    this.cartItem = []
    localStorage.setItem("cart", JSON.stringify(this.cartItem))
  }
  addCartTobackEnd(){
    let products = this.cartItem.map(item =>{
      return {productId : item.item.id ,Quantity : item.quantity}
    })
    let model = {
      userId : 5,
      date : new Date(),
      products: products
    }
    this.cartser.creatNewCard(model).subscribe(res=>{
      console.log(res)
    })
    this.wellDone = true ;
  }
}
