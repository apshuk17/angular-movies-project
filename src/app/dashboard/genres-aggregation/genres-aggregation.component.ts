import { Component, OnInit } from '@angular/core';
import { UserMoviesService } from '../../services/user-movies.service';

@Component({
  selector: 'app-genres-aggregation',
  templateUrl: './genres-aggregation.component.html',
  styleUrls: ['./genres-aggregation.component.css']
})
export class GenresAggregationComponent implements OnInit {

  constructor(private userService: UserMoviesService) { }

  ngOnInit() {
    // this.userService.getGenresMoviesCount().subscribe(console.log);
  }

}
