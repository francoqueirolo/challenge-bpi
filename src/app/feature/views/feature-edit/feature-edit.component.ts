import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TypesButtons } from '../../constants/feature.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../models/feature.models';

@Component({
  selector: 'app-feature-edit',
  templateUrl: './feature-edit.component.html',
  styleUrls: ['./feature-edit.component.scss'],
})
export class FeatureEditComponent implements OnInit {
  typeSave = TypesButtons.SAVE;
  typeCancel = TypesButtons.CANCEL;
  form!: FormGroup;
  @Output()
  eeSave = new EventEmitter<any>();
  @Output()
  eeCancel = new EventEmitter<boolean>();
  @Input()
  show: boolean = false;
  @Input()
  currentUser!: IUser;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
    const user = this.currentUser;
    this.form.patchValue({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }

  get disabledSave(): boolean {
    return this.form?.invalid;
  }

  onHandlerSave() {
    this.eeSave.emit(this.form?.value);
  }

  onHandlerCancel() {
    this.eeCancel.emit(true);
  }
}
