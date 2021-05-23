import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL_PROD = 'http://globecen.freeboxos.fr:8080/';
  API_URL_DEV = 'http://localhost:8080/';
  API_URL_DEV_LOCAL = 'http://localhost:8080/';
  API_URL = 'http://localhost:8080/';
  
  constructor() { }
}