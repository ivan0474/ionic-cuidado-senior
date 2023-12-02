import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adcita',
  templateUrl: './adcita.page.html',
  styleUrls: ['./adcita.page.scss'],
})
export class AdcitaPage implements OnInit {

  modeloPlan:string='';
  modeloHoraini:string='';
  modeloDescripcion:string='';
  modeloEnfermero:string='';
  modeloFecha:string='';
  modeloHorafin:string='';
  modeloPrecio:string='';

  constructor() { }

  ngOnInit() {
  }

  adcita(){

  }

recita(){

}

}

