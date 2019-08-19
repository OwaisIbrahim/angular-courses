import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      'username': new FormControl(
        '', [
          Validators.required, 
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace 
        ], 
        UsernameValidators.shouldBeUnique
        ),  //OR new FormGroup() - If form is complex
      'password': new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  });

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get getUsername() {
    return this.form.get('account.username');
  }
}
