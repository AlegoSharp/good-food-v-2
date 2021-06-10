import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {

  /*
  *   Envrionnement variables
  *   Variable d'environnement
  */

  API_URL_PROD = 'http:// :8080/';
  API_URL_DEV = 'http://localhost:8080/';
  API_URL_DEV_LOCAL = 'http://192.168.1.27:8080/';
  API_URL = 'http://globecen.freeboxos.fr:32733/';

  constructor() { }
}
