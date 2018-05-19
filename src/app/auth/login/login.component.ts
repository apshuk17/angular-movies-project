import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['',
        [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(255)]
      ],
      password: ['',
        [Validators.required, Validators.minLength(5), Validators.maxLength(1024)]
      ]
    });
  }

}
