import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Utilisateur } from 'src/app/models/User';
import { Router } from '@angular/router';
import { AlertService} from 'src/app/services/alert.service'
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor
  (    
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) 
  { }

  ngOnInit() {
;
  }

  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password)
    .toPromise()
    .then(response =>  {
        console.log(response);
        this.setObject("token",response);
        this.router.navigateByUrl('/account');
      }
    ).catch(reason => {
      this.alertService.presentAlertOk("Erreur",  reason.message);
    });   
  }
  async setObject(key: string, value: any) {
    await Storage.set({ key, value: JSON.stringify(value) });
  }
}
