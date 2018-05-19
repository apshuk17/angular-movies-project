import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './/auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from '../custom-material.module';
import { UserMoviesService } from '../services/user-movies.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomMaterialModule,
    AuthRoutingModule
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [UserMoviesService]
})
export class AuthModule { }
