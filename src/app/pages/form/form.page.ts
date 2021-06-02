import { Type } from '@angular/compiler/src/core';
import { Component, OnInit, NgModule } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Article } from 'src/app/models/Article';
import { Form } from 'src/app/models/Form';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { FormService } from '../../services/form.service';
import { Router, RouterOutlet } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { FormProperty } from 'src/app/models/FormProperty';
import { Categorie_Article } from 'src/app/models/Categorie_Article';
import { Promo } from 'src/app/models/Promo';
import { R3ResolvedDependencyType } from '@angular/compiler';
import { UtilityService } from 'src/app/services/utility.service';

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
    private alertService: AlertService,
    private util: UtilityService
  ) { }

  ngOnInit() {
    this.MyForm = new Form();
    this.setCreateForm();
  }

  async setProperty(item: FormProperty, value: any) {
    if (item.alias === 'Id') {
      this.myObject = value;
      item.objectReference = Object.values(value);
      this.setUpdateForm(value, this.MyForm.title);
      this.idName = item.nom;

    } else {
      item.value = value[item.nom];
      item.objectReference = Object.values(value);
      this.formService.setObjectProps(value, this.MyForm.properties);
    }
  }

  setUpdateForm(object: any, fixedModelName = '') {
    this.myObject = object;
    this.MyForm = new Form();
    this.MyForm = fixedModelName === '' ?
      this.formService.getFormFromObject(object) : this.formService.getFormFromObject(object, fixedModelName);
  }

  onIdChange(searchValue: string, target: IonInput): void {
    if (searchValue.length > 0) {
      this.formService.getDetail(searchValue, window.document.URL.split('/')[4]).toPromise()
        .then(response => {
          if (response !== undefined) {
            this.idName = target.name;
            this.setUpdateForm(response, window.document.URL.split('/')[4]);
          }
        });
    }
  }

  setCreateForm() {
    this.MyForm = new Form();
    let u: any;
    if (window.document.URL.includes('User')) {
      u = new Utilisateur();
      this.itemName = 'Utilisateur';
      u.init_empty();
    }
    else if (window.document.URL.includes('Categorie_Article')) {
      u = new Categorie_Article();
      this.itemName = 'Categorie_Article';
      u.init_empty();
    }
    else if (window.document.URL.includes('Article')) {
      u = new Article();
      this.itemName = 'Article';
      u.init_empty();
    }
    else if (window.document.URL.includes('Promo')) {
      u = new Promo();
      this.itemName = 'Promo';
      u.init_empty();
    }
    else{
      u = new Article();
      this.itemName = 'Article';
      u.init_empty();
    }
    this.myObject = u;
    this.MyForm = this.formService.getFormFromObject(u, this.itemName);
    console.log(this.MyForm);
  }

  editElement() {
    this.formService.setObjectProps(this.myObject, this.MyForm.properties);
    this.formService.postEditObject(window.document.URL.split('/')[4], this.myObject, this.util.token).toPromise().then(Response =>{

    }).catch(reason =>{
      this.alertService.presentAlertOk("Erreur",reason.message);
    });
  }

  createNewElement() {
    this.formService.setObjectProps(this.myObject, this.MyForm.properties);
    delete this.myObject[this.idName];
    console.log(this.idName, this.myObject);
    this.formService.postObject(window.document.URL.split('/')[4], this.myObject, this.util.token).toPromise()
      .then(() => {
        this.alertService.presentToast('Success', this.MyForm.title + ' créé', true);
      }).catch(reason => {
        console.log(reason);
        this.alertService.presentAlertOk('Erreur', reason.message + '\\n' + reason.error.details);
      });
  }

  addReference() {

  }

  async openModal(name: string, formProperty: FormProperty) {
    this.alertService.presentModal(name, name).then(async (modal) => {
      await modal.present();
      await modal.onDidDismiss().then((data) => {
        if (data?.data !== undefined) {
          this.setProperty(formProperty, data.data);
        }
      });
    });
  }
}
