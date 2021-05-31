import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnvService } from './env.service';
import { Utilisateur } from '../models/User';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  token:any;

  constructor(
    private http: HttpClient,
    private env: EnvService,
  ) { }


  /**
   * Logins http request
   * Requete http pour connecter l'utilisateur
   * @param email email
   * @param password password
   * @returns  
   */
  login(email: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain;charset=UTF-8 '
    });
    return this.http.post(this.env.API_URL + 'User/login/' + email + '&' + password, '', {responseType: 'text' });
  }


  /**
   * Registers an user
   * Créer un compte utilisateur
   * @param nom 
   * @param prenom 
   * @param email 
   * @param password 
   * @returns  
   */
  register(nom: string, prenom: string, email: string, password: string) {
    let user = new Utilisateur();
    user.nomUtilisateur = nom;
    user.prenomUtilisateur = prenom;
    user.mdpUtilisateur = password;
    user.emailUtilisateur = email;
    user.role = '';
    const headerDict = {
      'Content-Type': 'application/json',
    };
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(this.env.API_URL + 'User/create', JSON.stringify(user),requestOptions)
  }


  /**
   * Logouts --> Remove token
   * Se déconnecter --> Suppr token
   * @returns  
   */
  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
    .pipe(
      tap(data => {
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }
}
