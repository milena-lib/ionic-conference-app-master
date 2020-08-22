import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(public alertCtrl: AlertController) { }

  async presentAlert(msg: string, msgSub: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'שגיאה',
      // subHeader: 'Subtitle',
      message: msg + '<br /><i>' + msgSub + '</i>',
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

    await alert.present();
  }

}
