import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdcitaPage } from './adcita.page';

const routes: Routes = [
  {
    path: '',
    component: AdcitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdcitaPageRoutingModule {}
