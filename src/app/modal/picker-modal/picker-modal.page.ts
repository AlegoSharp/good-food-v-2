import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/app/models/Form';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { Article } from 'src/app/models/Article';
import { FormService } from 'src/app/services/form.service';
import { ModalController } from '@ionic/angular';
import { Categorie_Article } from 'src/app/models/Categorie_Article';
import { AlertService } from 'src/app/services/alert.service';
import { UtilityService } from 'src/app/services/utility.service';
// import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-picker-modal',
  templateUrl: './picker-modal.page.html',
  styleUrls: ['./picker-modal.page.scss'],
})
export class PickerModalPage implements OnInit {
  @Input() title: string;
  @Input() route: string;

  public Objects: any[];
  public MyObject: any;
  public ItemName: string;
  public MyForm: Form;

  constructor(
    private formService: FormService,
    private modalCtrl: ModalController,
    private alertService: AlertService,
    private util: UtilityService,
    ) { }

  ngOnInit() {
    this.Objects = [];
    this.formService.getList(this.route).toPromise().then(response => {
      (response as Array<any>).forEach(element => {
        element.options = this.util.Store[this.route].options;
        this.Objects.push(element);
      });
      this.MyForm = new Form();
      this.setCreateForm(this.Objects[0]);
    }).catch(reason => {
      this.alertService.presentAlertOk('', reason.message);
    });
  }

  selectObject(selectedObject: any){
    selectedObject.options = this.util.Store[this.route].options;
    this.modalCtrl.dismiss(selectedObject);
  }

  setCreateForm(u: any){
    this.MyForm = new Form();
    u.options = this.util.Store[this.route].options;
    this.MyObject = u;
    this.MyForm = this.formService.getFormFromObject(u, this.route);
  }
}
