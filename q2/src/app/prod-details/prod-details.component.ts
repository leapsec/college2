import { Component,OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
  ProdForm = new FormGroup({
    Pname : new FormControl('',Validators.required),
    Cname : new FormControl('',[Validators.required,Validators.email]),
    price : new FormControl('',Validators.required),
    color : new FormControl('',Validators.required)
  });
  EditProdForm = new FormGroup({
    Pname : new FormControl('',Validators.required),
    Cname : new FormControl('',[Validators.required,Validators.email]),
    price : new FormControl('',Validators.required),
    color : new FormControl('',Validators.required)
  });
  prod:boolean = false;
  EditProd:boolean = false;
  AddProd(){
    this.prod = true;
  }
  OnSub1(){
    this.prodService.ProdData.Pname = (this.ProdForm.controls.Pname.value? this.ProdForm.controls.Pname.value :'');
    this.prodService.ProdData.Cname = (this.ProdForm.controls.Cname.value? this.ProdForm.controls.Cname.value :'');
    this.prodService.ProdData.price = (this.ProdForm.controls.price.value ?parseInt(this.ProdForm.controls.price.value) : 1 );
    this.prodService.ProdData.color = (this.ProdForm.controls.color.value? this.ProdForm.controls.color.value :'');
    this.prod = false;
    this.prodService.saveProd();
  }
  chedprod(prod:Product){
    this.prodService.ProdData = prod;
    this.EditProd = true;
  }
  OnSub2(){
    this.EditProd = false;
    this.prodService.ProdData.Pname = (this.EditProdForm.controls.Pname.value? this.EditProdForm.controls.Pname.value : '');
    this.prodService.ProdData.Cname = (this.EditProdForm.controls.Cname.value? this.EditProdForm.controls.Cname.value : '');
    this.prodService.ProdData.price = (this.EditProdForm.controls.price.value? parseInt(this.EditProdForm.controls.price.value) : 0);
    this.prodService.ProdData.color = (this.EditProdForm.controls.color.value? this.EditProdForm.controls.color.value : '');
    this.prodService.updProd();
  }
  deleteProd(id:string){
    if(confirm('Are you sure you want to delete the record?')){
      this.prodService.delProd(id).subscribe(data=>{
        console.log('Record Deleted...');
      },
      err=>{
        console.log('Record Not Deleted ....');
      }
      )
    }
  }
  constructor(public prodService:ProductService){}
  ngOnInit(){
    this.prodService.getProd().subscribe(data=>{
      this.prodService.listProd = data;
    });
  }
}
