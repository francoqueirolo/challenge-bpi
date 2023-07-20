import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { TypesButtons } from '../../constants/feature.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feature-create',
  templateUrl: './feature-create.component.html',
  styleUrls: ['./feature-create.component.scss'],
})
export class FeatureCreateComponent implements OnInit {
  typeSave = TypesButtons.SAVE;
  typeCancel = TypesButtons.CANCEL;
  form!: FormGroup;
  @Output()
  eeSave = new EventEmitter<any>();
  @Output()
  eeCancel = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
  }

  get disabledSave(): boolean {
    return this.form.invalid;
  }

  get defense(): string {
    return this.form.get('defense')?.value;
  }

  get attack(): string {
    return this.form.get('attack')?.value;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  onHandlerSave() {
    this.eeSave.emit(this.form.value);
  }

  onHandlerCancel() {
    this.eeCancel.emit(true);
  }
}
