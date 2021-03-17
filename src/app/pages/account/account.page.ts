import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  public Token = "";
  constructor() { }

  ngOnInit() {
    this.getToken("token").then(value => this.Token = value.toString())
  }
  async getToken(key: string): Promise<{ value: any }> {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }
  async deleteToken(key: string){
    const ret = await Storage.remove({ key });
    
  }
}
