import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { CustomValidator } from '../../Validators/custom.validator'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({

      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator
      ])],

      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]

    });

  }

  ngOnInit() { }

  checkEmail() {
    document.getElementById("emailControl").classList.add("is-loading");
    this.form.controls["email"].disable();

    setTimeout(() => {
      console.log(this.form.controls["email"].value);
      this.form.controls["email"].enable();
      document.getElementById("emailControl").classList.remove("is-loading");
    }, 3000);
  }

}
