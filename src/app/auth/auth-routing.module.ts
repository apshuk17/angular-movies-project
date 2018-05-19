import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const AUTH_ROUTES: Routes = [
  { path: '',
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full'}
  ] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
