import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
   return this.http.get<Data[]>(environment.apipProd+'products')
  }
  getCatogris(){
   return this.http.get<Data[]>(environment.apipProd+'products/categories')
  }
  getCatogry(keyWord:string){
    return this.http.get<Data[]>(environment.apipProd+'products/category/'+ keyWord);
  }
  getProductById(id:number){
    return this.http.get<Data[]>(environment.apipProd+'products/'+ id);
  }
}
