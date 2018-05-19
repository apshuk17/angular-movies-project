import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresAggregationComponent } from './genres-aggregation/genres-aggregation.component';
import { MoviesTableComponent } from './movies-table/movies-table.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { UserMoviesService } from '../services/user-movies.service';
import * as fromDashboardStore from './store';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('dashboard', fromDashboardStore.GenresMoviesReducer),
    EffectsModule.forFeature(fromDashboardStore.DashboardEffects)
  ],
  declarations: [
    GenresAggregationComponent,
    MoviesTableComponent,
    DashboardContainerComponent
  ],
  providers: [UserMoviesService],
  exports: [DashboardContainerComponent]
})
export class DashboardModule { }
