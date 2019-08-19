import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
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
}
