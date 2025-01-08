import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFiltersComponent } from './filters.component';

describe('HeaderFiltersComponent', () => {
  let component: HeaderFiltersComponent;
  let fixture: ComponentFixture<HeaderFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
