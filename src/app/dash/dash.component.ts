import { Component, OnInit, ɵɵInheritDefinitionFeature } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

user=this.ds.current;
acno="";
ldate : Date = new Date();


dash=this.dh.group({
  accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amt:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

with=this.dh.group({
  waccno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  wpswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
 wamt:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
  constructor(private ds:DataService,private rt:Router, private dh:FormBuilder) { }

  ngOnInit(): void {
  }

  depo(){
    var accno=this.dash.value.accno;
    var pswd=this.dash.value.pswd;
    var amt=this.dash.value.amt;
    


    if(this.dash.valid){
      const result=this.ds.Dsdepo(accno,pswd,amt)
      if(result){
        alert("amount"+ amt +"credited and new balance is :"+result);

      }
  
    }
    else{
      alert("invalid form")
    }
   
  }


  withd(){
    var waccno=this.with.value.waccno;
    var wpswd=this.with.value.wpswd;
    var wamt=this.with.value.wamt;

    if(this.with.valid){
      const result =this.ds.Dswithd(waccno,wpswd,wamt)

      if(result){
  
  alert("amount"+wamt+"withdrawed from your account balance is :" + result);
      }
  
    }
    else{
      alert("form is not valid")
    }
  

  }
  deleteAc(){
    this.acno =this.ds.currentAc
  }

  onDelete(event:any){
    alert("parant" + event);
  }

  onCancel(){
    this.acno=""
  }

}
