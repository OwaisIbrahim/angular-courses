import { Component } from '@angular/core';

@Component({
    selector: 'courses', //<courses> = 'courses'
    template: 
        `<h2>
            {{ title }}
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
        </h2>`
}) 

export class CoursesComponent {
    title = "List of courses";
    courses = ["course1", "course2", "course3"];
}