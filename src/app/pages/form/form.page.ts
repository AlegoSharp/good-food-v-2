import { Type } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Article } from 'src/app/models/Article';
import { Form } from 'src/app/models/Form';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { FormService } from '../../services/form.service';
import { AlertService } from 'src/app/services/alert.service';
import { FormProperty } from 'src/app/models/FormProperty';
import { Categorie_Article } from 'src/app/models/Categorie_Article';
import { Promo } from 'src/app/models/Promo';
import { UtilityService } from 'src/app/services/utility.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public myObject: any;
  public itemName: string;
  public idName: string;
  public MyForm: Form;
  public AcutalType: Type;

  constructor(
    private formService: FormService,
    private alertService: AlertService,
    private util: UtilityService
  ) {  }

  ngOnInit() {
    this.MyForm = new Form();
    this.setCreateForm();
  }

  /**
   * Sets property
   * Remplis l'objet à parir de la propriété du formulaire
   * @param item item
   * @param value value
   */
  async setProperty(item: FormProperty, value: any) {
    if (item.alias === 'Id') {
      value.options = this.util.Store[this.MyForm.title].options;
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

  /**
   * Sets update form
   * Definit le formulaire en fonction de l'objet en parametre
   * @param object object
   * @param [fixedModelName] [fixedModelName]
   */
  setUpdateForm(object: any, fixedModelName = '') {
    this.myObject = object;
    object.options = this.util.Store[fixedModelName].options;
    this.MyForm = new Form();
    this.MyForm = fixedModelName === '' ?
      this.formService.getFormFromObject(object) : this.formService.getFormFromObject(object, fixedModelName);
  }

  /**
   * Determines whether id change
   * Determine un changement dans l'id
   * @param searchValue searchValue
   * @param target target
   */
  onIdChange(target: any): void {
    const searchValue = target.value;
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

  /**
   * Sets create form TODO REMOVE
   * Initialise un formulaire de creation
   */
  setCreateForm() {
    const itemName = window.document.URL.split('/')[4];
    let myObject = this.util.Store[itemName];
    if (itemName === '' || myObject === undefined){
      myObject = this.util.Store.Article;
    }

    myObject.init_empty();
    this.myObject = myObject;
    this.MyForm = this.formService.getFormFromObject(this.myObject, this.itemName);
    console.log(this.MyForm);
  }

  /**
   * Edits element properties
   * Edit les propriétés de l'element
   */
  editElement() {
    this.formService.setObjectProps(this.myObject, this.MyForm.properties);
    this.formService.postEditObject(window.document.URL.split('/')[4], this.myObject, this.util.token).toPromise().then(Response => {
    }).catch(reason => {
      this.alertService.presentAlertOk('Erreur', reason.message);
    });
  }

  /**
   * Creates new element in db
   * Creer un nouvel element en base
   */
  createNewElement() {
    this.formService.setObjectProps(this.myObject, this.MyForm.properties);
    delete this.myObject[this.idName];
    console.log(this.idName, this.myObject);
    this.formService.postObject(window.document.URL.split('/')[4], this.myObject, this.util.token).toPromise()
      .then(() => {
        this.alertService.presentToast('Success', this.MyForm.title + ' créé', true);
      }).catch(reason => {
        console.log(reason);
        this.alertService.presentAlertOk('Erreur', reason.message + '\\n' + reason.error?.details);
      });
  }

  /**
   * Opens modal to select an element in db
   * Ouvre une page modale pour selectionner un element en base
   * @param name name
   * @param formProperty formProperty
   */
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
