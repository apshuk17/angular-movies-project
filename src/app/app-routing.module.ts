import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';

const APP_ROUTES: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  { path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  { path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
