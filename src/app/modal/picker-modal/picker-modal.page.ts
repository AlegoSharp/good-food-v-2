import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/app/models/Form';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { Article } from 'src/app/models/Article';
import { FormService } from 'src/app/services/form.service';
import { ModalController } from '@ionic/angular';
import { Categorie_Article } from 'src/app/models/Categorie_Article';
// import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-picker-modal',
  templateUrl: './picker-modal.page.html',
  styleUrls: ['./picker-modal.page.scss'],
})
export class PickerModalPage implements OnInit {
  @Input() title: string;
  @Input() route: string;

  public Objects: object[];
  public MyObject: object;
  public ItemName: string;
  public MyForm: Form;

  constructor(
    private formService: FormService,
    private modalCtrl: ModalController,
    // private alertService: AlertService,
    ) { }

  ngOnInit() {
    this.Objects = new Array<object>();
    this.formService.getList(this.route).toPromise().then(response=>{
      (response as Array<object>).forEach(element => {
        this.Objects.push(element);
      });
      this.MyForm = new Form();
      this.setCreateForm(this.Objects[0]);
      console.log(this.MyForm);
    }).catch(reason => {
      // this.alertService.presentAlertOk("Erreur",this.route)
    });
  }

  selectObject(selectedObject: object){
    this.modalCtrl.dismiss(selectedObject);
  }
  setCreateForm(u: any){
    this.MyForm = new Form();
    this.MyObject = u;
    this.MyForm = this.formService.getFormFromObject(u,this.route)
    console.log(this.MyForm.properties.length);
  }
}
