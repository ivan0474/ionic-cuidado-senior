import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {

  modeloPlan:string='';
  modeloHoraini:string='';
  modeloDescripcion:string='';
  modeloEnfermero:string='';
  modeloFecha:string='';
  modeloHorafin:string='';
  modeloPrecio:string='';


  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {
  }

  agendar(){
    const USER_URL = "http://localhost:3001/plan-service"
    if(this.modeloPlan == ""){
      this.presentToast("Se debe ingresar un plan de servicio", 'danger');
      this.router.navigate(["/agendar"])
      return
    }
    if(this.modeloHoraini == ""){
      this.presentToast("Se debe ingresar hora de inicio", 'danger');
      this.router.navigate(["/agendar"])
      return
    }
    if(this.modeloDescripcion == ""){
      this.presentToast("Se debe ingresar descripción", 'danger');
      this.router.navigate(["/agendar"])
      return
    }
    if(this.modeloHorafin == ""){
      this.presentToast("Se debe ingresar hora de fin", 'danger');
      this.router.navigate(["/agendar"])
      return
    }

    const reqbody = {
      "planServiceName": this.modeloPlan, 
      "price": 100000,
      "description": this.modeloDescripcion,
      "startTime": this.modeloHoraini, 
      "endTime": this.modeloHorafin, 
      "status": "active"
    }

    const res:any = this.callAPI(USER_URL, JSON.stringify(reqbody), "POST")
    console.log(res)
   
    let extra:NavigationExtras={
      replaceUrl: true,
      state:{

        plan: this.modeloPlan,
        horaInicio:this.modeloHoraini

      }
      }

      this.router.navigate([],extra)

    this.presentToast('Cita creada', 'primary');
    this.router.navigate(["/principal"])
  }
reserva(){
  this.router.navigate(['principal'])
}

async callAPI(url: string, body: string, method: string) {
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
      } else {
          return res;
      }
  } catch (error) {
      console.error("Error al realizar la solicitud:", error);
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

validateString(field: string): string{
  const regex = /^[a-zA-Z0-9]+$/;
   if (!regex.test(field)) {
    return "Los datos ingresados solo deben contener letras y no debe estar vacíos";
   }
   return "ok";
}

validateNumber(field: string): string{
  const regex = /^[0-9]+$/;
   if (!regex.test(field)) {
    return "Los datos ingresados solo deben contener numeros y no deben estar vacíos";
   }
   return "ok";
}

}
