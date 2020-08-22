import { Component, OnInit } from '@angular/core';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  
  constructor(public alertCtrl: AlertController,) { }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'שגיאה',
      // subHeader: 'Subtitle',
      message: 'תקלה זמנית...<br /><i>מספר תקלה 123</i>',
      backdropDismiss: false,
      //buttons: ['סגור']
      buttons: [
        {
          text: 'סגור',
          role: 'סגור',
          cssClass: 'btn-alert',
          handler: (blah) => {
            console.log('OK: blah');
          }
        }
      ]
    });
  }
}
