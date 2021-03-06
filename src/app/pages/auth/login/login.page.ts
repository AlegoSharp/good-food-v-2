import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(    private authService: AuthService,
    ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    console.log(form.value.email)

    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
      },
      error => {
        console.log(error);
      }
    );
  }
}
