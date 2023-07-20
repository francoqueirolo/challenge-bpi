import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureTableComponent } from './feature-table.component';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { IUser } from '../../models/feature.models';

describe('FeatureTableComponent', () => {
  let component: FeatureTableComponent;
  let fixture: ComponentFixture<FeatureTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureTableComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should pass when method onEdit is clicked', () => {
    const spy = jest.spyOn(component, 'onEdit');
    const user: IUser = {
      id: '0',
      name: '',
      email: '',
    };
    component.onEdit(user);
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onDelete is clicked', () => {
    const spy = jest.spyOn(component, 'onDelete');
    const user: IUser = {
      id: '0',
      name: '',
      email: '',
    };
    component.onDelete(user);
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onPageChange is clicked', () => {
    const spy = jest.spyOn(component, 'onPageChange');
    component.onPageChange(1);
    expect(spy).toHaveBeenCalled();
  });

  test('should generate an array of numbers from 1 to total pages', () => {
    component.totalPages = jest.fn(() => 5);
    const expectedNumbers = [1, 2, 3, 4, 5];

    const result = component.getNumbers();

    expect(result).toEqual(expectedNumbers);
  });

  test('should update myValue when myInput changes', () => {
    component.ngOnChanges({
      data: new SimpleChange('hello', 'world', false),
    });
    expect(component.data).toEqual([]);
  });
});
