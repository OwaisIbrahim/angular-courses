import { BadInput } from './../common/bad-input';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private URL: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.URL)
      .pipe(
        catchError((error: Response) => {
          if(error.status ===  404)
            return throwError(new BadInput(error));
          return throwError(new AppError(error));
        })
      );
  }

  addPost(post) {
    return this.http.post(this.URL, JSON.stringify(post))
      .pipe(
        catchError((error: Response) => {
          if(error.status ===  404)
            return throwError(new BadInput(error));
          return throwError(new AppError(error))
        })
      );
  }

  updatePost(post: any) {
    return this.http.patch(this.URL + '/' + post.id, JSON.stringify({ isRead: true }))
      .pipe(
        catchError((error: Response) => {
          if( error.status === 404 )
            return throwError(new NotFoundError());
          return throwError(new AppError(error))
        })
      )
    ;
  }

  removePost(postId: Number) {
    return this.http.delete(this.URL  + '/' + postId)
      .pipe(
        catchError((error: Response) => {
          if(error.status ===  404)
            return throwError(new NotFoundError());
          return throwError(new AppError(error))
        })
      );
  }
}
