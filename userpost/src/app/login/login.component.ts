import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {Login} from './login';
import {LoginService} from '../login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public erro =0;
  public waning :string ='';
  public subscription : Subscription;
  public userlogin : Login;  
  constructor(
    public routerservie : Router,
    public loginService : LoginService,
  ){
 
  }
 
   ngOnInit() {
     this.userlogin =new Login();
     //this.ckeckLogin();
   }
  //  ckeckLogin(){
  //    if(localStorage.getItem('user')){
  //      this.routerservie.navigate(['home'])//đăng nhâp thành công sẽ trả về đg dẫn đến thằng index
  //    }
  //  }
   onLogin() {
    this.subscription =this.loginService.LoginRegister(this.userlogin).subscribe(data =>{
      if(data && data['code']==200 ){
        this.routerservie.navigate(['post']);// navigate lại router 'courses
        localStorage.setItem('user',JSON.stringify(this.userlogin));
        console.log(this.userlogin)
      }
      else{
        this.erro =-1;
        this.waning = data['success']

      }
  
  
  })

 
   }

}
