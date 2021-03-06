import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts: Object[];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe( response => {
        // console.log(JSON.stringify(response, null, 1));
        this.posts = response as [];
        console.log(this.posts);
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.addPost(post)
      .subscribe(
        response => {
          post['id'] =  response['id'];
          this.posts.splice(0, 0, post);
        }, 
        (error: AppError) => {
          if( error instanceof BadInput ) { }
            // this.form.setErrors(error.OriginalError);
          else throw error; 
          //this throw error will go to our custom AppErrorHandler
      });
  }

  updatePost(post) {
    this.service.updatePost(post)    
      .subscribe( 
        response => {
          let index = this.posts.indexOf(post);
          this.posts[index]['title'] = 'Hello';
          console.log(response);
        },
        (error: AppError) => {
          if( error instanceof NotFoundError  ) { }
          else throw error;
        });
    // this.http.put(this.URL, JSON.stringify(post));
  }
  
  deletePost(post) {
    this.service.removePost(post.id)    
      .subscribe( 
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
          console.log(response);
        }, 
        (error: AppError) => {
          if( error instanceof NotFoundError  ) {
            alert('This post has been deleted');
          } else throw error; 
        });
  }

}
