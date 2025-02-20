import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationInfoComponent } from './location-info.component';

describe('LocationInfoComponent', () => {
  let component: LocationInfoComponent;
  let fixture: ComponentFixture<LocationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
