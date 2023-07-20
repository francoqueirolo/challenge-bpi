import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feature-search',
  templateUrl: './feature-search.component.html',
  styleUrls: ['./feature-search.component.scss'],
})
export class FeatureSearchComponent implements OnInit {
  form!: FormGroup;
  @Output()
  eeSearch = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: [''],
    });

    this.form.get('search')?.valueChanges.subscribe((val) => {
      this.eeSearch.emit(val);
    });
  }
}
