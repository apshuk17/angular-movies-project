import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
            MatButtonModule,
            MatMenuModule,
            MatIconModule,
            MatFormFieldModule,
            MatCheckboxModule,
            MatInputModule,
            MatCardModule
          ]
})
export class CustomMaterialModule { }
