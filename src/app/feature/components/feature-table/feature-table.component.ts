import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { IUser } from '../../models/feature.models';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FeatureTableComponent implements OnChanges {
  @ViewChild('reporte') captureDivRef!: ElementRef<HTMLDivElement>;

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

  downloadImage(): void {
    const element = this.captureDivRef.nativeElement;

    html2canvas(element).then((canvas: any) => {
      // Obtener la imagen en formato de datos base64
      const imageData = canvas.toDataURL('image/png');
      // Convertir la imagen en Blob
      const blob = this.dataURItoBlob(imageData);
      // Guardar la imagen como archivo
      saveAs(blob, 'reporte.png');
    });
  }

  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }
}
