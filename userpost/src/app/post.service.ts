import { Injectable } from '@angular/core';
import {Post} from './post/Post';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_POST : string ="http://localhost:3000/post";
  constructor(private http :HttpClient) { }


  CreatePost(post: Post) :Observable<Post[]>{
    return this.http.post<Post[]>(this.API_POST,post)
  }
  getAllPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.API_POST)
  }


}
