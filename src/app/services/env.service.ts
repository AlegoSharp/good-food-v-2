import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://globecen.freeboxos.fr:8080/';
  
  constructor() { }
}