import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../Validators/custom.validator';
import { DataService } from '../../Services/data.service';
import { UI } from '../../Util/ui';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  providers: [DataService, UI]
})
export class SignupPageComponent implements OnInit {

  public form: FormGroup;

  constructor(private router :Router, private formBuilder: FormBuilder, private dataService: DataService, private ui: UI) {
    this.form = this.formBuilder.group({
      firstName: ["", Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(40),
        Validators.required
      ])],
      lastName: ["", Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(40),
        Validators.required
      ])],
      birthDate: ["", Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required
      ])],
      email: ["", Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(200),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      document: ["", Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.required
      ])],
      username: ["", Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      password: ["", Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])],
      confirmPassword: ["", Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  submit() {
    this.dataService
        .createUser(this.form.value)
        .subscribe(result => {
          alert("Bem vindo ao Modern Store");
          this.router.navigateByUrl("/");
        }, error => {
          console.log(error);
        });
  }
}
