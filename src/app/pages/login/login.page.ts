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
  rolId:number=0;
  
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

    const res:any = await this.callAPI(USER_URL, JSON.stringify(reqbody), "POST")

    console.log("respuesta que quiero" + JSON.stringify(res))
    if (!res) {
      that.presentToast('Nombre o contraseña incorrecto', 'danger');
    } else {
      localStorage.setItem('idUsuario', JSON.stringify(this.modeloUsuario));
      localStorage.setItem('rolId', JSON.stringify(res.rolId));
      localStorage.setItem('idPaciente', JSON.stringify(res.userId));
      that.presentToast('inicio de sesion correcto', 'success');
      this.direccion(res.rolId)
    } 
};

    async callAPI(url: string, body: string, method: string): Promise<boolean> {
      try {
          const res: any = await (await fetch(url, {
            method: method,
            headers: {
              "Content-Type": "application/json"
            },
            body: body
          })).json();
  
          if (res.message) { 
            console.error(`Error al realizar la solicitud. Código de estado: ${res.status}`);
              return false;
          } else {
              return res;
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

  direccion(rolId:number){
    if(rolId === 1){
      this.router.navigate(["/enfermeros"])
    }
    else if (rolId === 2){
      this.router.navigate(["/principal"])
    }
    else if (rolId === 3){
      this.router.navigate(["/administrador"]) 
    }
  }
}

