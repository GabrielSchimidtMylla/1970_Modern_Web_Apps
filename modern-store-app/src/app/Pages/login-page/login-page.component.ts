import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { DataService } from './../../Services/data.service';

import { CustomValidator } from '../../Validators/custom.validator';
import { UI } from '../../Util/ui';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [UI, DataService]
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private ui: UI, private dataService: DataService) {

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

  };

  ngOnInit() {
    this.dataService
        .getCourses()
        .subscribe(result => {
          console.log(result);
        },error => {
          console.log(error);
        });
   }

  checkEmail() {

    this.ui.lock("emailControl");

    setTimeout(() => {
      this.ui.unlock("emailControl");
    }, 3000);
  };

  submit() {
    this.dataService.createUser(this.form.value);
  };

  showModal() {
    this.ui.setActive("modal");
  };

  hideModal() {
    this.ui.setInactive("modal");
  };

}
