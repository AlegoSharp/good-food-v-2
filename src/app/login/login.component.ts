import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private formModule: FormsModule
  ) { }

  ngOnInit() {}

  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }
}
