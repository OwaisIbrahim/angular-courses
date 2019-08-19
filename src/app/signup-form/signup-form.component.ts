import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    'username': new FormControl('', Validators.required),  //OR new FormGroup() - If form is complex
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  get getUsername() {
    return this.form.get('username');
  }
}