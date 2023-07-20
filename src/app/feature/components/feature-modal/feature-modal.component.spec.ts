import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureModalComponent } from './feature-modal.component';

describe('FeatureModalComponent', () => {
  let component: FeatureModalComponent;
  let fixture: ComponentFixture<FeatureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should pass when method onConfirm is clicked', () => {
    const spy = jest.spyOn(component, 'onConfirm');
    component.onConfirm();
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onCancel is clicked', () => {
    const spy = jest.spyOn(component, 'onCancel');
    component.onCancel();
    expect(spy).toHaveBeenCalled();
  });
});
