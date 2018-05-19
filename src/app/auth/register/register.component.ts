import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserMoviesService } from '../../services/user-movies.service';

import { RegisterUserSchema } from '../../models/register-user';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser$: Observable<RegisterUserSchema>;
  registerUserEmail$: Observable<string>;
  registerForm: FormGroup;
  testResponse: Observable<{}>;

  constructor(private fb: FormBuilder,
            private userService: UserMoviesService) { }

  createRegisterForm(form: FormGroup): FormGroup {
    return form = this.fb.group({
      name: ['',
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      ],
      email: ['',
        [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(255)]
      ],
      password: ['',
        [Validators.required, Validators.minLength(5), Validators.maxLength(1024)]
      ],
      isAdmin: [false, Validators.required]
    });
  }

  onSubmit() {
    const userInfo = this.registerForm.value;
    // this.userService.testApiCall(userInfo).subscribe(console.log);
    this.registerUserEmail$ = this.userService.saveRegisteredUser(userInfo).pipe(
      map((user) => user.email)
    );
    this.registerForm.setValue({
      name: '',
      email: '',
      password: '',
      isAdmin: false
    });
  }

  ngOnInit() {
    this.registerForm = this.createRegisterForm(this.registerForm);
  }

}
