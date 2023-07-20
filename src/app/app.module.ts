import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureTableComponent } from './feature/components/feature-table/feature-table.component';
import { FeaturePageComponent } from './feature/views/feature-page/feature-page.component';
import { FeatureCreateComponent } from './feature/views/feature-create/feature-create.component';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { FeatureSearchComponent } from './feature/components/feature-search/feature-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureEditComponent } from './feature/views/feature-edit/feature-edit.component';
import { FeatureModalComponent } from './feature/components/feature-modal/feature-modal.component';
import { LoaderInterceptor } from './feature/interceptors/loader.interceptor';
import { LoaderService } from './feature/services/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    FeatureTableComponent,
    FeaturePageComponent,
    FeatureCreateComponent,
    FeatureSearchComponent,
    FeatureEditComponent,
    FeatureModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    LoaderService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
