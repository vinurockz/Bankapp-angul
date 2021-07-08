import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accound="please enter accno";
  

  LoginForm=this.fb.group({
    accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    
  })

  constructor(private router:Router, private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  login(){
   
    var accno=this.LoginForm.value.accno
    var pswd=this.LoginForm.value.pswd
    
    if(this.LoginForm.valid){
      const result =this.ds.DsLogin(accno,pswd)

      if(result){
      alert("successfull login")
      this.router.navigateByUrl("dash")
      }
    }
    else{
      alert("The form is not valid")
    }
  
  
  }
  register(){
    this.router.navigateByUrl("regis");
  }

}