import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', //<courses> = 'courses'
    template: 
        `
            {{ course.title | uppercase }} <br/>
            {{ course.students }} <br/>
            {{ course.rating | number:'2.2-3' }} <br/>
            {{ course.price | currency:'AUD':false:'3.2-2' }} <br/> <!--CURRENCY PIPE where symbol=false and 3.2-2 indicates digit till-->
            {{ course.releaseDate | date:'shortDate'}} <br/>
        `
}) 

export class CoursesComponent {
   course = {
       title: "The Complete Angular Course",
       rating: 4.9745,
       students: 30135,
       price: 190.95,
       releaseDate: new Date(2016,3,1)
   }
}