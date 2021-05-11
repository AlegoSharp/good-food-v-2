import { Type } from '@angular/compiler/src/core';
import { Component, OnInit, NgModule } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Article } from 'src/app/models/Article';
import { Form } from 'src/app/models/Form';
import { User } from 'src/app/models/User';
import { FormService } from '../../services/form.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public myObject: Object
  public itemName: string
  public MyForm: Form;
  public AcutalType: Type;

  constructor(private formService: FormService, private router: Router) { }

  ngOnInit() {
    this.MyForm = new Form();
    this.setCreateForm();
    //this.formService.getDetail('1','User').toPromise()
    //.then(Response => console.log(Response));
  }

  setUpdateForm(object: any){
    this.myObject = object;
    this.MyForm = new Form();
    this.MyForm = this.formService.getFormFromObject(object)
    console.log(this.MyForm)
  }

  onIdChange(searchValue: string, target:IonInput): void {  
    if(searchValue.length > 0)
      this.formService.getDetail(searchValue,window.document.URL.split('/')[4]).toPromise()
      .then(response =>  {
        if(response !== undefined){
          delete response[target.name];
          this.setUpdateForm(response);
        }
      });
  }

  setCreateForm(){
    this.MyForm = new Form;
    let u: any; 
    if(window.document.URL.includes('User')){
      u = new User();
      this.itemName = "utilisateur";
      u.init_empty();
    }
    else if(window.document.URL.includes('Article')){
      u = new Article();
      this.itemName = "article";
      u.init_empty();
    }
    this.myObject = u;
    this.MyForm = this.formService.getFormFromObject(u)
  }

  createNewElement(){
    console.log(this.myObject);
    console.log((<any>this.myObject).constructor.name);
    this.formService.postObject(window.document.URL.split('/')[4],this.myObject).toPromise()
    .then(response =>  {
      console.log(response);
    });
  }
}
