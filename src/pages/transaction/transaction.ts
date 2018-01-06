import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { TransactionData } from '../../models/transaction-data';
import { Util } from '../../providers/util';
import { StringConstant, ToastConstant, ErrorMsg } from '../../providers/constants';
import { Database } from '../../providers/database';


@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html'
})
export class TransactionPage {

  private transactionData: TransactionData[];
  private profit: any = 0;

  constructor(public navCtrl: NavController, public util: Util, public database: Database, public alertCtrl: AlertController) {
  }

  ionViewWillEnter(){
    this.getData()
  }

  private getData(){
    this.database.fetchTransactionData().then((data: TransactionData[]) => {
      this.transactionData = data;
    },(error) => {
      this.util.showToast(ErrorMsg.ERROR_GET_TRANSACTION_DATA, ToastConstant.TOAST_TOP,)
    });
  }

  private trashClicked(){
    let prompt = this.alertCtrl.create({
        title: 'Delete Transaction !!',
        // message: "Enter a No. to delete transaction.",
        enableBackdropDismiss: true,
        cssClass: "prompt-alert",
        inputs: [
          {
            name: 'id',
            placeholder: 'Enter a No. to delete transaction.',
            type: 'number',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              this.database.deleteTransactionData(data.id)
            }
          }
        ]
      });
      prompt.present();
  }



}
