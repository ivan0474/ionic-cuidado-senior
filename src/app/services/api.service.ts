import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ruta: string = 'https://localhost:3001/';

  constructor() { }

  login(email: string, password: string){
    const url = this.ruta + "user/login";
    const body = { email: email, password: password };
  
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
  

}
