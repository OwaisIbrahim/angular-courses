import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  
//FORM BUILDER
    form = new FormGroup({
      name: new FormControl('', Validators.required),
      contact: new FormGroup({
        email: new FormControl(),
        phone: new FormControl()
      }),
      topics: new FormArray([])
    });
        // ===
    constructor(fb: FormBuilder) {
      fb.group({
        name: ['', Validators.required],
        contact: fb.group({
          email: [],
          phone: []
        }),
        topics: ([])
      });
    }

/*
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.getTopics.push(new FormControl(topic.value));
    topic.value = "";
  }
  removeTopic(topic: FormControl) {
    let index = this.getTopics.controls.indexOf(topic);
    this.getTopics.removeAt(index);
  }
  get getTopics() {
    return this.form.get('topics') as FormArray;
  }
*/
}
