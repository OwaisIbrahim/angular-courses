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
        <button class="btn btn-primary" [class.active]="isActive">Save</button>  <!-- CLASS BINDING -->
        <button [style.backgroundColor]="isActive ? 'blue' : 'white' ">Save</button>  <!-- STYLE BINDING -->
        <div (click)="onDivClicked()">
            <button class="btn btn-primary" (click)="onSave($event)">Save</button>  <!-- CLASS BINDING -->
        </div>
        <input (keyup.enter)="onKeyUp($event)"/>        
        <input #email (keyup.enter)="onKeyUp1(email.value)"/>        
        `
}) 

export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
    colSpan=2;
    isActive = true;
    courses;

    onDivClicked() {
        console.log("Div was clicked");
    }

    onSave($event) {
        console.log("Button was clicked", $event);
        $event.stopPropagation();   //To stop EVENT BUBBLING (Event within event)
    }

    onKeyUp($event) {
        console.log("ENTER is pressed with value: ", $event.target.value);    //When enter is pressed input field
    }

    
    onKeyUp1($value) {
        console.log("ENTER is pressed with value: ", $value);    //When enter is pressed input field
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}