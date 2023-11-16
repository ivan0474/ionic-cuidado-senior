import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  modeloPassword: string="";
  modeloUsuario: string="";

  
  constructor(private router: Router,
    private toastController: ToastController
    ) {
   
    console.log('Pagina Iniciada')
   }
  
  ngOnInit() {
  }

  login() {
    let that = this;

    const response =  this.api.login(this.modeloUsuario, this.modeloPassword)
    if (this.modeloUsuario === "admin" && this.modeloPassword === "123") {
        localStorage.setItem('idUsuario', JSON.stringify(this.modeloUsuario));
      that.presentToast('inicio de sesion correcto', 'success');
      this.router.navigate(['/principal']);
    } else {
      that.presentToast('Nombre o contraseña incorrecto', 'danger');
    }
};
    //this.router.navigate(['editar'], parametros);

  async presentToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1700,
      position: 'middle',
      color: color,
    });

    await toast.present();
  }
}

