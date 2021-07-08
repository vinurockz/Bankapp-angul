import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  current="";
  currentAc="";

  account_details:any = {
    1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
    1001: { name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { name: "ram", accno: 1002, password: "testthree", amount: 7000 },
    1003: { name: "ravi", accno: 1003, password: "testfour", amount: 10000 },
  }

  constructor() { 
     this.getDe()
  }
saveDe(){
  if(this.account_details){
    localStorage.setItem("account_details",JSON.stringify(this.account_details))
  }
  
  if(this.current){
    localStorage.setItem("current",JSON.stringify(this.current))
  }
  if(this.currentAc){
    localStorage.setItem("currentAc",JSON.stringify(this.currentAc))
  }
}

getDe(){
  
  
  if(localStorage.getItem("account_details")){
    this.account_details = JSON.parse(localStorage.getItem("account_details") || '')
    console.log(this.account_details);
  }
  if(localStorage.getItem("current")){
    this.current = JSON.parse(localStorage.getItem("current") || '')
  }
  if(localStorage.getItem("currentAc")){
    this.currentAc = JSON.parse(localStorage.getItem("currentAc") || '')
  }
}

    register_user(name:any,accno:any,password:any){
      let datas=this.account_details;
      if (accno in datas){
        return false;
      }
      else{
        this.account_details[accno]={
          name,
          accno,
          password,
          amount:0
        }
        this.saveDe();
        return true;
      }
    }

    DsLogin(accno:any,pswd:any){

      let datas=this.account_details;

    
    

    if (accno in datas){
      if(pswd==datas[accno]["password"]){
        this.current=datas[accno]["name"]
        this.currentAc=accno
        this.saveDe();
        return true;
      }
      else{
        alert("Incorrect Login failed")
        return false;
      }
    }
    else{
      alert("this accont number not in login list")
      return false;
    }
  
  }

Dsdepo(accno:any,pswd:any,amt:any){
var amount=parseInt(amt)

let datas=this.account_details
if(accno in datas){
  if(pswd == datas[accno]["password"]){
    datas[accno]["amount"] += amount
    this.saveDe();
    return datas[accno]["amount"];
  }
  else{
    alert("password is wrong")
    return false;
  }
}
else{
  alert("wrong accound number")
  return false;
}
}

Dswithd(waccno:any,wpswd:any,wamt:any){
var amount=parseInt(wamt)

let datas=this.account_details
if(waccno in datas){

  if(amount<=datas[waccno]["amount"]){
    if(wpswd == datas[waccno]["password"]){
      datas[waccno]["amount"] -= amount
      this.saveDe();
      return datas[waccno]["amount"];
    }
    else{
      alert("wrong password")
      return false;
    }

  }
  else{
    alert("Insuffitient Balance")
  }
  

}
else{
  alert("wrong account number")
  return false;
}


}

    }
  

