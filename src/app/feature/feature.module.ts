import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTableComponent } from './components/feature-table/feature-table.component';
import { FeaturePageComponent } from './views/feature-page/feature-page.component';
import { FeatureCreateComponent } from './views/feature-create/feature-create.component';
import { FeatureSearchComponent } from './components/feature-search/feature-search.component';
import { FeatureEditComponent } from './views/feature-edit/feature-edit.component';
import { FeatureModalComponent } from './components/feature-modal/feature-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  FeatureTableComponent,
  FeaturePageComponent,
  FeatureCreateComponent,
  FeatureSearchComponent,
  FeatureEditComponent,
  FeatureModalComponent,
];

const MODULES = [CommonModule, ReactiveFormsModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureModule {}
