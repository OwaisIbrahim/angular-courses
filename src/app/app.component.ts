import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canSave=true;
  post = {
    isFavorite: true
  }
  courses;

  loadCourses() {
    this.courses = [
      {id: 1, name:"course1"},
      {id:2, name:"course2"},
      {id:3, name:"course3"}
    ];
  }
  onFavoriteChanged(isFavorite) {
    console.log('Favorite changed', isFavorite)
  }
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
