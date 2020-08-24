import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router ,ActivatedRoute ,Params} from '@angular/router';
import {Post} from './Post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public subscription : Subscription
  public Posts : Post[]
  public post : Post;
  constructor(
    public  PostService : PostService,
    public routerservice : Router
    ) { }

  ngOnInit() {
    this.subscription = this.PostService.getAllPost().subscribe(data=>{
      this.Posts =data;
      

    })
    this.post =new Post()
    
  }
  onAddAuthoritie(){
    this.subscription =this.PostService.CreatePost(this.post).subscribe(data =>{
          this.PostService.getAllPost().subscribe(posts=>{
            this.Posts=posts
          }) 
    })
   
  }



}
