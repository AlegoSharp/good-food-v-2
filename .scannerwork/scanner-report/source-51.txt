import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    if(form.value.confirm_password === form.value.password){
      this.authService.register(form.value.nom, form.value.prenom, form.value.email, form.value.password)
      .toPromise()
      .then(response =>  {
          this.router.navigateByUrl('/login');
        }
      )
      .catch(reason =>{
        this.alertService.presentAlertOk("Erreur",  reason.message);

      });
    }else{
      this.alertService.presentAlertOk("Erreur","Les mots de passes ne correspondent pas.");
    }

  }

}
