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

  async login() {
    let that = this;
  
    const USER_URL = "http://localhost:3001/user/login"
    const reqbody = {
      "email": this.modeloUsuario,
      "password": this.modeloPassword
    }
    
    const res = await this.callAPI(USER_URL, JSON.stringify(reqbody))

    console.log("respuesta que quiero" + JSON.stringify(res))
    if (res) {
      localStorage.setItem('idUsuario', JSON.stringify(this.modeloUsuario));
      that.presentToast('inicio de sesion correcto', 'success');
      this.router.navigate(['/principal']);
    } else {
      that.presentToast('Nombre o contraseña incorrecto', 'danger');
    }
};

    async callAPI(url: string, body: string): Promise<boolean> {
      try {
          const res = await fetch(url, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: body
          });
  
          if (res.ok) {
              return true;
          } else {
              console.error(`Error al realizar la solicitud. Código de estado: ${res.status}`);
              return false;
          }
      } catch (error) {
          console.error("Error al realizar la solicitud:", error);
          return false;
      }
  }

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

