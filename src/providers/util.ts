import { Injectable } from "@angular/core";

import { ToastController } from 'ionic-angular';

@Injectable()
export class Util {

  constructor(private toastCtrl: ToastController){

  }

  public isBlank(str: any) {
      if (str == null || str == 'null' || str == undefined || str == 'undefined') {
          return true;
      } else if (str.trim().length == 0) {
          return true;
      } else {
          return false;
      }
  }

  public showToast(msg: string, position: string) {
      let toast = this.toastCtrl.create({
          message: msg,
          duration: 4000,
          position: position,
          dismissOnPageChange: true
      });
      toast.present();
  }

  public showToastWithButton(msg: string, position: string, showCloseButton: boolean, closeButtonText: string) {
      let toast = this.toastCtrl.create({
          message: msg,
          duration: 4000,
          position: position,
          showCloseButton: showCloseButton,
          closeButtonText: closeButtonText,
          dismissOnPageChange: true
      });
      toast.present();
  }

  public removeNull(str: any) {
      if (str == "null" || str == null || str == undefined) {
          return "";
      } else {
          return str;
      }
  }

}
