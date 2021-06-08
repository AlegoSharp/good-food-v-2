import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnvService } from './env.service';
import { Utilisateur } from '../models/Utilisateur';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  token: any;

  constructor(
    private http: HttpClient,
    private env: EnvService,
  ) { }


  /**
   * Logins http request
   * Requete http pour connecter l'utilisateur
   * @param email email
   * @param password password
   * @returns Promise
   */
  login(email: string, password: string) {
    return this.http.post(this.env.API_URL + 'Utilisateur/connexion/' + email + '&' + password, '', {responseType: 'text' });
  }


  /**
   * Registers an user
   * Créer un compte utilisateur
   * @param nom nom
   * @param prenom prenom
   * @param email email
   * @param password password
   * @returns Promise
   */
  register(nom: string, prenom: string, email: string, password: string) {
    const user = new Utilisateur();
    user.f_nomUtilisateur = nom;
    user.h_prenomUtilisateur = prenom;
    user.e_mdpUtilisateur = password;
    user.d_emailUtilisateur = email;
    user.i_role = '';
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: '*',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    console.log(JSON.stringify(user));
    return this.http.post(this.env.API_URL + 'Utilisateur/creer', JSON.stringify(user), requestOptions);
  }


  /**
   * Logouts --> Remove token
   * Se déconnecter --> Suppr token
   */
  logout() {
    const headers = new HttpHeaders({
      Authorization: this.token.token_type + ' ' + this.token.access_token
    });
    return this.http.get(this.env.API_URL + 'auth/logout', { headers })
    .pipe(
      tap(data => {
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    );
  }
}
