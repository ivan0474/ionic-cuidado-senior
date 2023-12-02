import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const USER_URL = "http://localhost:3001/user/"

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  name!: string | null;
  age!: string | null;  lastName!: string | null;
  rut!: string | null;
  email!: string | null;
  gender!: string | null;
  date!: string | null;
  address!:string | null;
  phone!:string | null;


  constructor(private router: Router) {}

  ngOnInit() {
    const url = USER_URL + localStorage.getItem("idPaciente");
    this.callAPI(url, "GET").then(res => {
        this.name = res.firstName;
        this.age = res.age;
        this.lastName = res.lastName
        this.rut = res.identificationNumber
        this.email = res.email
        this.gender = res.gender
        this.date = res.birthDate
        this.address = res.address
        this.phone = res.phoneNumber
    })
    .catch(error => {
      console.error("Error al realizar la solicitud:", error);
    });
  }

perfil(){
  this.router.navigate(['principal'])
}

  number!: string | null;

async callAPI(url: string, method: string) {
  try {
      const res: any = await (await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json"
        },
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

}
