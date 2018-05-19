import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from '../dashboard/dashboard.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    AdminRoutingModule
  ],
  declarations: []
})
export class AdminModule { }
