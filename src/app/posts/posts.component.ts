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
  private URL: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.URL)
      .subscribe( response => {
        // console.log(JSON.stringify(response, null, 1));
        this.posts = response as [];
        console.log(this.posts);
    });
  }
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.http.post(this.URL, JSON.stringify(post))
      .subscribe(response => {
        post['id'] =  response['id'];
        this.posts.splice(0, 0, post);
      });
  }

}