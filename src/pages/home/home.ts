import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TransactionData } from '../../models/transaction-data';
import { Util } from '../../providers/util';
import { StringConstant, ToastConstant, ErrorMsg } from '../../providers/constants';
import { Database } from '../../providers/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private transaction: TransactionData;
  private toastMsg: string = 'All fields are mandatory to fill.'
  private buy: string = 'buy'
  private sell: string = 'sell'

  constructor(public navCtrl: NavController, public util: Util, public database: Database) {
    this.transaction = new TransactionData()
  }

  private depositClicked(){

  }

  private buyClicked(){
    this.transaction.action = this.buy
    this.validate()
  }

  private sellClicked(){
    this.transaction.action = this.sell
    this.validate()
  }

  private validate(){
    if(this.util.isBlank(this.transaction.rate)){
      this.util.showToastWithButton(this.toastMsg, ToastConstant.TOAST_BOTTOM, true, StringConstant.OK)
    }
    else if(this.util.isBlank(this.transaction.amount)){
      this.util.showToastWithButton(this.toastMsg, ToastConstant.TOAST_BOTTOM, true, StringConstant.OK)
    }
    else if(this.util.isBlank(this.transaction.quantity)){
      this.util.showToastWithButton(this.toastMsg, ToastConstant.TOAST_BOTTOM, true, StringConstant.OK)
    }
    else{
      this.saveData()
    }
  }

  private saveData(){
    this.database.insertTransactionData(this.transaction).then((data) => {
      this.util.basicAlert(StringConstant.DATA_SAVED, "")
    },(error) => {
      this.util.showToast(ErrorMsg.ERROR_SAVING_DATA, ToastConstant.TOAST_BOTTOM,)
    });
  }

}
