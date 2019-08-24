import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private URL: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.URL);
  }

  addPost(post) {
    return this.http.post(this.URL, JSON.stringify(post));
  }

  updatePost(post: any) {
    return this.http.patch(this.URL + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  removePost(postId: Number) {
    return this.http.delete(this.URL  + '/' + postId);

  }
}
