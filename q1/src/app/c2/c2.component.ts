import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  userForm = new FormGroup({
    username : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',Validators.required)
  });
  user = {
    username:'',
    email:'',
    password:''
  };
  isSubmitted:boolean = false;
  onSubmit(){
    this.isSubmitted = true;
    this.user = {
      username: <string> this.userForm.controls.username.value,
      email: <string> this.userForm.controls.email.value,
      password : <string> this.userForm.controls.password.value
    };
  }
  constructor(){}
  ngOnInit(): void {
    
  }
}
