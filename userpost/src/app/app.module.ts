import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import {LoginService} from './login.service';
import {PostService} from './post.service';

const approutes :Routes =[  
  {
    path :'',
    redirectTo :'/login',
    pathMatch : 'full'
  },

    
      {
        path : 'login',
        component : LoginComponent//ng g guard auth tạo lớp bảo vệ 
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'changepassword',
        component: ChangeInfoComponent
      },
      {
        path: 'post',
        component: PostComponent
      }

   
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChangeInfoComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    RouterModule.forRoot(approutes)
  ],
  providers: [LoginService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
