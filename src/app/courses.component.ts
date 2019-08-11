import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', //<courses> = 'courses'
    template: 
        `<h2>{{ title }}</h2>
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />           <!-- PROPERTY BINDING -->
        <ul>                    
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <table>
            <tr>
                <td [attr.colspan]="colSpan" ></td>
            </tr>
        </table>
        <button class="btn btn-primary">Save</button>
        `
}) 

export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
    colSpan=2;
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}