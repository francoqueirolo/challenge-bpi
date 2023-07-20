import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IUser } from '../../models/feature.models';

@Component({
  selector: 'app-feature-modal',
  templateUrl: './feature-modal.component.html',
  styleUrls: ['./feature-modal.component.scss'],
})
export class FeatureModalComponent {
  @Input()
  show: boolean = false;
  @Input()
  currentUser!: IUser;
  @Output()
  eeConfirm = new EventEmitter<IUser>();
  @Output()
  eeCancel = new EventEmitter<boolean>();

  onConfirm() {
    this.eeConfirm.emit(this.currentUser);
  }
  onCancel() {
    this.eeCancel.emit(true);
  }
}
