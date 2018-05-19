import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardState } from '../store/states/dashboard.state';
import { GenresMoviesLoading } from '../store';
import { getGenresMoviesState } from '../store/selectors/genre-movies.selector';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {

  constructor(private store: Store<DashboardState>) { }

  ngOnInit() {
    this.store.dispatch(new GenresMoviesLoading());
    this.store.select(getGenresMoviesState).subscribe(res => {
      console.log('State: ', res);
    });
  }

}
