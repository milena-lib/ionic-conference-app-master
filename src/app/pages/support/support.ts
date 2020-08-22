import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage {
  submitted = false;
  supportMessage: string;

  supportPages = [ //Test Milena
    {
      title: 'נתוני תשתית',
      url: '/app/tabs/schedule',
      icon: 'calendar' //'info'
    },
    {
      title: 'קבצים מצורפים',
      url: '/app/tabs/speakers',
      icon: 'people' //'attach'
    },
    {
      title: 'פיצוץ ערכה',
      url: '/app/tabs/map',
      icon: 'map' //'explosion'
    },
    {
      title: 'עדכון גרסת נתבים',
      url: '/app/tabs/about',
      icon: 'information-circle' //'update'
    },
    {
      title: 'פניות לבזק',
      url: '/app/tabs/map',
      icon: 'information-circle' //'to-bezeq'
    },
    {
      title: 'איפוס סיסמת WIFI',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];
  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) { }

  async ionViewDidEnter() {
    const toast = await this.toastCtrl.create({
      message: 'This does not actually send a support request.',
      duration: 3000
    });
    await toast.present();
  }

  async submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = '';
      this.submitted = false;

      const toast = await this.toastCtrl.create({
        message: 'Your support request has been sent.',
        duration: 3000
      });
      await toast.present();
    }
  }

  // If the user enters text in the support question and then navigates
  // without submitting first, ask if they meant to leave the page
  // async ionViewCanLeave(): Promise<boolean> {
  //   // If the support message is empty we should just navigate
  //   if (!this.supportMessage || this.supportMessage.trim().length === 0) {
  //     return true;
  //   }

  //   return new Promise((resolve: any, reject: any) => {
  //     const alert = await this.alertCtrl.create({
  //       title: 'Leave this page?',
  //       message: 'Are you sure you want to leave this page? Your support message will not be submitted.',
  //       buttons: [
  //         { text: 'Stay', handler: reject },
  //         { text: 'Leave', role: 'cancel', handler: resolve }
  //       ]
  //     });

  //     await alert.present();
  //   });
  // }
}
