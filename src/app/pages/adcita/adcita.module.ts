import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdcitaPageRoutingModule } from './adcita-routing.module';

import { AdcitaPage } from './adcita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdcitaPageRoutingModule
  ],
  declarations: [AdcitaPage]
})
export class AdcitaPageModule {}
