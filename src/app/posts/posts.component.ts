import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Object[];
  constructor(http: HttpClient) {
    http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe( response => {
        // console.log(JSON.stringify(response, null, 1));
        this.posts = response as [];
        console.log(this.posts[0]);
        
        
      });
  }

}
