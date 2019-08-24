import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

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
      .subscribe(response => {
        post['id'] =  response['id'];
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {
    this.service.updatePost(post)    
      .subscribe( response => {
        let index = this.posts.indexOf(post);
        this.posts[index]['title'] = 'Hello';
        console.log(response);
        
    });
    // this.http.put(this.URL, JSON.stringify(post));
  }
  
  deletePost(post) {
    this.service.removePost(post.id)    
      .subscribe( response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        
    });
  }

}
