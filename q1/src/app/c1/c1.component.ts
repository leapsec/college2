import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  Roll_No:Number = 34;
  Name: string = "k1";
  dob: Date = new Date('2000-09-19');
  fruits: Array<string> = ['Apple','Orange','Banana'];
  SelectedInp = {};
  Inp = [
    {id:1,name:'one'},
    {id:2,name:'two'},
    {id:3,name:'three'},
    {id:4,name:'four'},
    {id:5,name:'five'}
  ];
  selInp = {};
  inptp: Array<string> = [
    'textBox',
    'textArea'
  ];
  popUp(){
    alert(JSON.stringify(this.SelectedInp));
  }
  constructor(){ }
  ngOnInit(): void{

  }
}
