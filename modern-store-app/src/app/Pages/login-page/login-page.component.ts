import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

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

  constructor(private router: Router, private formBuilder: FormBuilder, private ui: UI, private dataService: DataService) {

    this.form = this.formBuilder.group({

      username: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],

      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]

    });

    let token = localStorage.getItem("mws.token");
    if (token) {
      this.router.navigateByUrl("/home");
    }
  };

  ngOnInit() {
  }

  submit() {
    this.dataService
      .authenticate(this.form.value)
      .subscribe(result => {
        localStorage.setItem('mws.token', result.token);
        localStorage.setItem('mws.user', JSON.stringify(result.user));

        this.router.navigateByUrl("/home");
      }, error => {
        console.log(error);
      });
  };

  showModal() {
    this.ui.setActive("modal");
  };

  hideModal() {
    this.ui.setInactive("modal");
  };

}
