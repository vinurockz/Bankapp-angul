import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regisform=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})
  

  constructor(private ds:DataService, private rt:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){


    var uname=this.regisform.value.uname;
    var accno=this.regisform.value.accno;
    var pswd=this.regisform.value.pswd;

    if(this.regisform.valid){
      const result=this.ds.register_user(uname,accno,pswd)
    if (result){
      
      this.rt.navigateByUrl("")
      alert("Sucessfully Registered")

    }
    else{
      alert("The account number already exist, please login")
    }
    }
    else{
      alert("invalid form ")
    }
    
  }  
}
