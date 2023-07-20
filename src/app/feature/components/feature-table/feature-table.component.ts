import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { IUser } from '../../models/feature.models';

@Component({
  selector: 'app-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FeatureTableComponent implements OnChanges {
  @Input() data: IUser[] = [];
  @Output()
  eeEdit = new EventEmitter<IUser>();
  @Output()
  eeDelete = new EventEmitter<IUser>();
  pageSize = 5;
  currentPage = 1;

  onEdit(user: IUser) {
    this.eeEdit.emit(user);
  }

  onDelete(user: IUser) {
    this.eeDelete.emit(user);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  totalPages(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  currentPageData(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.data.slice(startIndex, endIndex);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.currentPage = 1;
    }
  }

  getNumbers() {
    let numbers = [];
    for (let i = 1; i <= this.totalPages(); i++) {
      numbers.push(i);
    }
    return numbers;
  }
}
