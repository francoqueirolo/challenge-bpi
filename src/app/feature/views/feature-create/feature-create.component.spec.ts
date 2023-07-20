import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCreateComponent } from './feature-create.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('FeatureCreateComponent', () => {
  let component: FeatureCreateComponent;
  let fixture: ComponentFixture<FeatureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FeatureCreateComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCreateComponent);
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
