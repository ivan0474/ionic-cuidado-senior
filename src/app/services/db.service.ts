import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class DbService {

  constructor(private router: Router) { }

  canActive() {
    this.router.navigate(['login']);
    return false;
  }
}
