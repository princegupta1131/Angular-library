import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbFiltersComponent } from './sb-filters.component';

describe('SbFiltersComponent', () => {
  let component: SbFiltersComponent;
  let fixture: ComponentFixture<SbFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
