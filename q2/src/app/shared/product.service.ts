import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private myhttp:HttpClient) { }
  producturl:string = 'http://localhost:9000/product/';
  listProd:Product[]=[];
  ProdData:Product = new Product();
  saveProd(){
    console.log('on save');
    this.myhttp.post<Product>(this.producturl,this.ProdData).subscribe(
      data=>{
        console.log(data);
      },
      err=>{
        console.log(err);
      }
    );
  }
  updProd(){
    console.log('on upd  ' + `${this.producturl+this.ProdData._id}`);
    return this.myhttp.put<Product>(`${this.producturl+this.ProdData._id}`,this.ProdData).subscribe(
      data=>{
        console.log(data);
      },
      err=>{
        console.log(err);
      }
    );
  }
  getProd():Observable<Product[]>
  {
    return this.myhttp.get<Product[]>(this.producturl);
  }
  delProd(id:string){
    return this.myhttp.delete(`${this.producturl+id}`);
  }
}
