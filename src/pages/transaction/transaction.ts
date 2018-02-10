import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { TransactionData } from '../../models/transaction-data';
import { Util } from '../../providers/util';
import { StringConstant, ToastConstant, ErrorMsg } from '../../providers/constants';
import { Database } from '../../providers/database';
import * as $ from 'jquery';


@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html'
})
export class TransactionPage {

  private transactionData: TransactionData[] = [];
  private profit: any = 0;

  constructor(public navCtrl: NavController, public util: Util, public database: Database, public alertCtrl: AlertController) {
  }

  ionViewDidEnter(){
    this.getData()
  }

  private getData(){
    this.database.fetchTransactionData().then((data: TransactionData[]) => {
      this.transactionData = data;
      // for(let i=0; i<this.transactionData.length; i++){
      //   if(this.transactionData[i].trans_selected == 'true'){
      //     $('tr#tran_id' + this.transactionData[i].id).css("cssText", "color: yellow !important;");
      //   }
      // }
    },(error) => {
      this.util.showToast(ErrorMsg.ERROR_GET_TRANSACTION_DATA, ToastConstant.TOAST_TOP,)
    });
  }

  private trashClicked(){
    let prompt = this.alertCtrl.create({
        title: 'Delete Transaction !!',
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
              this.database.deleteTransactionData(data.id).then(data => {
                this.getData();
              });
            }
          }
        ]
      });
      prompt.present();
  }

  private plus_clicked(tran: TransactionData, selected: string){
    tran.trans_selected = selected;
    // if(selected == 'false'){
    //   $('tr#tran_id' + tran.id).css('background-color', 'white');
    // }
    // else{
    //   $('tr#tran_id' + tran.id).css('background-color', 'lightgrey');
    // }
    this.database.updateTransactionData(tran).then((data) => {

    });
  }



}
