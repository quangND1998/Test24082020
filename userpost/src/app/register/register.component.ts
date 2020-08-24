import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {Register} from './Register'
import {LoginService} from '../login.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public erro =0;
  public waning :string ='';
  public subscription : Subscription;
  public userlogin1 : Register;  
  constructor(
    public routerservie : Router,
    public loginService : LoginService,
  ){
 
  }
 
   ngOnInit() {
     this.userlogin1 =new Register();
     //this.ckeckLogin();
   }
  //  ckeckLogin(){
  //    if(localStorage.getItem('user')){
  //      this.routerservie.navigate(['home'])//đăng nhâp thành công sẽ trả về đg dẫn đến thằng index
  //    }
  //  }
  onRegister() {
    this.subscription =this.loginService.RegisterUser(this.userlogin1).subscribe(data =>{
      if(data && data['code']==200 ){
        this.routerservie.navigate(['login']);// navigate lại router 'courses
        localStorage.setItem('user',JSON.stringify(this.userlogin1));
        console.log(this.userlogin1)
      }
      else{
        this.erro =-1;
        this.waning = data['failed']

      }
  
  
  })

 
   }


}
