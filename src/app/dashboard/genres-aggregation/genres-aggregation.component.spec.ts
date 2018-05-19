import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresAggregationComponent } from './genres-aggregation.component';

describe('GenresAggregationComponent', () => {
  let component: GenresAggregationComponent;
  let fixture: ComponentFixture<GenresAggregationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresAggregationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresAggregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
