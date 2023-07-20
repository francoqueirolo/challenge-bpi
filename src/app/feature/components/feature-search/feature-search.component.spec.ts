import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureSearchComponent } from './feature-search.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeatureSearchComponent', () => {
  let component: FeatureSearchComponent;
  let fixture: ComponentFixture<FeatureSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureSearchComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
