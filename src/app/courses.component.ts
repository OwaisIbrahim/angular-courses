import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', //<courses> = 'courses'
    template: 
        `
            {{ text | summary }} <br/>
        `
}) 

export class CoursesComponent {
   
    text = `The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. The Complete Angular Course. `
    
}