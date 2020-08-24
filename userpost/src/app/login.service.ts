import { Injectable } from '@angular/core';
import {Login} from './login/login';
import {Register}from './register/Register'
import {ChangePasword} from './change-info/changepassword'
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public APIlogin :string =  'http://localhost:3000/userLogin';
  public APIRegister :string ='http://localhost:3000/usersRegister';
  public APIChangePasword :string='http://localhost:3000/usserChangePasword'
  constructor(public http :HttpClient) { }
  LoginRegister(Login : Login) :Observable<Login[]>{
    return this.http.post<Login[]>(this.APIlogin,Login);
  }
  RegisterUser(users : Register) :Observable<Register[]>{
    return this.http.post<Register[]>(this.APIRegister,users);
  }
  ChangePassword(users : ChangePasword) :Observable<ChangePasword[]>{
    return this.http.put<ChangePasword[]>(this.APIChangePasword,users);
  }
}
