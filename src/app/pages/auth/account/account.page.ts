import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import jwt_decode from "jwt-decode";

const { Storage } = Plugins;
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  public Token = "";
  public email = "";
  public address: {
    first_name: '',
    last_name: '',
    address_line_1: '',
    address_line_2: '',
    country: 'India',
    state: '',
    city: '',
    zipcode: undefined,
    phone_number: undefined
  }

  flag;

  countries: any;
  constructor() { }

  ngOnInit() {
    this.getToken("token").then(value => this.Token = value.toString())
    Storage.get({ key: 'token' }).then(x=> {
      if(x.value !== null && x.value !== undefined){
        console.log((jwt_decode(x.value) as any).email);
        this.email = (jwt_decode(x.value) as any).email;
      }
    })
  }
  async getToken(key: string): Promise<{ value: any }> {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }
  async deleteToken(key: string){
    const ret = await Storage.remove({ key });
    
  }
}
