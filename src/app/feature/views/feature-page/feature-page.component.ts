import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription, catchError, tap, throwError } from 'rxjs';
import { TypesButtons } from '../../constants/feature.constants';
import { IUser } from '../../models/feature.models';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.scss'],
})
export class FeaturePageComponent implements OnInit {
  typeAdd = TypesButtons.ADD;
  data!: IUser[];
  currentUser!: IUser;
  errorMessage: string = '';
  showCreate = false;
  showEdit = false;
  showErrorAlert = false;
  showModal = false;
  showAddButton = true;
  subs: Subscription = new Subscription();

  constructor(
    private userService: UserService,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  showErrorMessage(errMessage: string): void {
    this.showErrorAlert = true;
    this.errorMessage = errMessage || 'Generic Error';
  }

  loadUsers() {
    this.subs.add(
      this.userService
        .getAll()
        .pipe(
          tap((res: IUser[]) => {
            this.data = res;
            this.setInitValues();
          }),
          catchError((error) => {
            this.showErrorMessage(error.message);
            return throwError(() => error);
          })
        )
        .subscribe()
    );
  }

  onSearch(val: string): void {
    if (val.length >= 3) {
      this.data = this.data.filter((user: IUser) =>
        String(user.name).toLowerCase().includes(val)
      );
    } else {
      this.loadUsers();
    }
  }

  onAddUser() {
    this.showAddButton = false;
    this.showCreate = true;
  }

  onCreateUser(user: IUser) {
    this.subs.add(
      this.userService
        .create(user)
        .pipe(
          tap((res) => {
            this.loadUsers();
            this.setInitValues();
          }),
          catchError((error) => {
            this.showErrorMessage(error.message);
            return throwError(() => error);
          })
        )
        .subscribe()
    );
  }

  onUpdateUser(user: IUser) {
    this.subs.add(
      this.userService
        .update(user)
        .pipe(
          tap((res) => {
            this.loadUsers();
            this.setInitValues();
          }),
          catchError((error) => {
            this.showErrorMessage(error.message);
            return throwError(() => error);
          })
        )
        .subscribe()
    );
  }

  onEditUser(user: IUser) {
    this.showCreate = false;
    this.showAddButton = false;
    this.currentUser = user;
    this.showEdit = true;
  }

  onDeleteUser(user: IUser) {
    this.currentUser = user;
    this.showModal = true;
  }

  onCancelUser() {
    this.setInitValues();
  }

  setInitValues(): void {
    this.showAddButton = true;
    this.showCreate = false;
    this.showEdit = false;
    this.errorMessage = '';
  }

  onModalConfirm(user: IUser) {
    this.showModal = false;

    this.subs.add(
      this.userService
        .delete(user.id)
        .pipe(
          tap((res: IUser[]) => {
            this.loadUsers();
          }),
          catchError((error) => {
            this.showErrorMessage(error.message);
            return throwError(() => error);
          })
        )
        .subscribe()
    );
  }

  onModalCancel() {
    this.showModal = false;
  }
}
