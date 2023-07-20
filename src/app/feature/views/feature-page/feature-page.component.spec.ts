import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePageComponent } from './feature-page.component';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';
import { IUser } from '../../models/feature.models';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FeaturePageComponent', () => {
  let component: FeaturePageComponent;
  let fixture: ComponentFixture<FeaturePageComponent>;
  let userServiceMock: any;
  let users: IUser[] = [
    {
      id: '1',
      name: 'Franco',
      email: 'me@bpi.com',
    },
    {
      id: '2',
      name: 'Miguel',
      email: 'me@bpi.com',
    },
  ];
  const user: IUser = {
    id: '1',
    name: 'Franco',
    email: 'me@bpi.com',
  };

  beforeEach(async () => {
    userServiceMock = {
      getAll: jest.fn().mockReturnValue(of([])),
      create: jest.fn().mockReturnValue(of({})),
      update: jest.fn().mockReturnValue(of({})),
      delete: jest.fn().mockReturnValue(of({})),
    };

    await TestBed.configureTestingModule({
      declarations: [FeaturePageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: UserService,
          useValue: userServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should load users on init', () => {
    userServiceMock.getAll.mockReturnValueOnce(
      of(users)
    );

    component.ngOnInit();

    expect(component.data).toEqual(users);
  });

  test('should show create user form on add user', () => {
    component.onAddUser();

    expect(component.showAddButton).toBe(false);
    expect(component.showCreate).toBe(true);
    expect(component.showEdit).toBe(false);
  });

  test('should create a new user', () => {
    userServiceMock.create.mockReturnValueOnce(of(user));

    component.onCreateUser(user);

    expect(component.showAddButton).toBe(true);
    expect(component.showCreate).toBe(false);
    expect(component.showEdit).toBe(false);
    expect(userServiceMock.create).toHaveBeenCalledWith(
      user
    );
  });

  test('should pass when method showErrorMessage is clicked', () => {
    const spy = jest.spyOn(component, 'showErrorMessage');
    component.showErrorMessage('Error Generico');
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onSearch is called', () => {
    const spy = jest.spyOn(component, 'onSearch');
    component.onSearch('pik');
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onUpdateUser is called', () => {
    const spy = jest.spyOn(component, 'onUpdateUser');
    component.onUpdateUser(user);
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onEditUser is called', () => {
    const spy = jest.spyOn(component, 'onEditUser');
    component.onEditUser(user);
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onDeleteUser is called', () => {
    const spy = jest.spyOn(component, 'onDeleteUser');
    component.onDeleteUser(user);
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onModalConfirm is called', () => {
    const spy = jest.spyOn(component, 'onModalConfirm');
    component.onModalConfirm(user);
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onModalCancel is called', () => {
    const spy = jest.spyOn(component, 'onModalCancel');
    component.onModalCancel();
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onCancelUser is called', () => {
    const spy = jest.spyOn(component, 'onCancelUser');
    component.onCancelUser();
    expect(spy).toHaveBeenCalled();
  });
});
