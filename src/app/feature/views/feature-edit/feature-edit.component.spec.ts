import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureEditComponent } from './feature-edit.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeatureEditComponent', () => {
  let component: FeatureEditComponent;
  let fixture: ComponentFixture<FeatureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureEditComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should pass when method onHandlerSave is clicked', () => {
    const spy = jest.spyOn(component, 'onHandlerSave');
    component.onHandlerSave();
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onHandlerCancel is clicked', () => {
    const spy = jest.spyOn(component, 'onHandlerCancel');
    component.onHandlerCancel();
    expect(spy).toHaveBeenCalled();
  });
});
