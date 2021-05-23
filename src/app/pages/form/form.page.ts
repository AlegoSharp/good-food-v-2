import { Type } from '@angular/compiler/src/core';
import { Component, OnInit, NgModule } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Article } from 'src/app/models/Article';
import { Form } from 'src/app/models/Form';
import { Utilisateur } from 'src/app/models/User';
import { FormService } from '../../services/form.service';
import { Router, RouterOutlet } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { FormProperty } from 'src/app/models/FormProperty';
import { Role } from 'src/app/models/Role';
import { Categorie_Article } from 'src/app/models/Categorie_Article';
import { Promo } from 'src/app/models/Promo';
import { R3ResolvedDependencyType } from '@angular/compiler';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public myObject: object;
  public itemName: string;
  public idName: string;
  public MyForm: Form;
  public AcutalType: Type;

  constructor(
    private formService: FormService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.MyForm = new Form();
    this.setCreateForm();
  }

  async setProperty(item: FormProperty, value: any){
    if (item.alias === 'Id'){
      this.myObject = value;
      this.MyForm = this.formService.getFormFromObject(value, this.MyForm.title);
      this.idName = item.nom;

    }else{
      item.value = value[item.nom];
      item.objectReference = Object.values(value);
      this.formService.setObjectProps(value, this.MyForm.properties);
    }
  }

  setUpdateForm(object: any, fixedModelName = ''){
    this.myObject = object;
    this.MyForm = new Form();
    this.MyForm = fixedModelName === '' ?
      this.formService.getFormFromObject(object) : this.formService.getFormFromObject(object, fixedModelName);
  }

  onIdChange(searchValue: string, target: IonInput): void {
    if (searchValue.length > 0){
      this.formService.getDetail(searchValue, window.document.URL.split('/')[4]).toPromise()
      .then(response =>  {
        if (response !== undefined){
          this.idName = target.name;
          this.setUpdateForm(response, window.document.URL.split('/')[4]);
        }
      });
    }
  }

  setCreateForm(){
    this.MyForm = new Form();
    let u: any;
    if (window.document.URL.includes('User')){
      u = new Utilisateur();
      this.itemName = 'utilisateur';
      u.init_empty();
    }
    else if (window.document.URL.includes('Categorie_Article')){
      u = new Categorie_Article();
      this.itemName = 'categorie_article';
      u.init_empty();
    }
    else if (window.document.URL.includes('Article')){
      u = new Article();
      this.itemName = 'article';
      u.init_empty();
    }
    else if (window.document.URL.includes('Promo')){
      u = new Promo();
      this.itemName = 'promo';
      u.init_empty();
    }
    else if (window.document.URL.includes('Role')){
      u = new Role();
      this.itemName = 'role';
      u.init_empty();
    }
    this.myObject = u;
    this.MyForm = this.formService.getFormFromObject(u);
  }

  editElement(){
    this.formService.setObjectProps(this.myObject, this.MyForm.properties);
    this.formService.postEditObject(window.document.URL.split('/')[4], this.myObject);
  }

  createNewElement(){
    this.formService.setObjectProps(this.myObject, this.MyForm.properties);
    delete this.myObject[this.idName];
    console.log(this.idName, this.myObject);
    this.formService.postObject(window.document.URL.split('/')[4], this.myObject).toPromise()
    .then(() =>  {
      this.alertService.presentToast('Success', this.MyForm.title + ' créé', true);
    }).catch(reason => {
      console.log(reason);
      this.alertService.presentAlertOk('Erreur', reason.message + '\\n' + reason.error.details);
    });
  }

  addReference(){

  }

  async openModal(name: string, formProperty: FormProperty) {
    this.alertService.presentModal(name, name).then(async (modal) => {
      await modal.present();
      await modal.onDidDismiss().then((data) => {
        if (data?.data !== undefined){
          this.setProperty(formProperty, data.data);
        }
      });
    });
  }
}
