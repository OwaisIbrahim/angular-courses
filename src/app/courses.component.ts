import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', //<courses> = 'courses'
    template: 
        `<h2>
            {{ title }}
            <img src="{{ imageUrl }}" />
            <img [src]="imageUrl" />           <!-- PROPERTY BINDING -->
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
        </h2>`
}) 

export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}