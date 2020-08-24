import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {ChangePasword} from './changepassword'
import {LoginService} from '../login.service'

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {

  public erro =0;
  public waning :string ='';
  public subscription : Subscription;
  public ChangePasword : ChangePasword;  
  constructor(
    public routerservie : Router,
    public loginService : LoginService,
  ){
 
  }
 
   ngOnInit() {
     this.ChangePasword =new ChangePasword();
     //this.ckeckLogin();
   }
  //  ckeckLogin(){
  //    if(localStorage.getItem('user')){
  //      this.routerservie.navigate(['home'])//đăng nhâp thành công sẽ trả về đg dẫn đến thằng index
  //    }
  //  }
   onLogin() {
    this.subscription =this.loginService.ChangePassword(this.ChangePasword).subscribe(data =>{
      if(data && data['code']==200 ){
        this.routerservie.navigate(['login']);// navigate lại router 'courses
        localStorage.setItem('user',JSON.stringify(this.ChangePasword));
        console.log(this.ChangePasword)
        this.waning = data['success']
      }
      else{
        this.erro =-1;
        this.waning = data['success']

      }
  
  
  })

 
   }

}
