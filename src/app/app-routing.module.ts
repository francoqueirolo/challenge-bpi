import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturePageComponent } from './feature/views/feature-page/feature-page.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
