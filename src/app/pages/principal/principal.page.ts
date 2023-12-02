import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(
    private toastController: ToastController,
    private router: Router
    ) 
    { }

  ngOnInit() {
    if (localStorage.getItem('idUsuario') === null) {
      this.presentToast('Debes ingresar a tu sesión', 'warning');
      this.router.navigate(['/login']);
    }
  }

  async presentToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: 'middle',
      color: color,
    });
  }

  perfil(){
    this.router.navigate(['/perfil'])
  }

  agendar(){
    this.router.navigate(['/agendar'])
  }
  
  cierre(){

    this.router.navigate(['inicio'])

  }

}
