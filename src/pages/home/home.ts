import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TransactionData } from '../../models/transaction-data';
import { DepositData } from '../../models/deposit-data';
import { Util } from '../../providers/util';
import { StringConstant, ToastConstant, ErrorMsg } from '../../providers/constants';
import { Database } from '../../providers/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private transaction: TransactionData;
  private depositData: DepositData;
  private toastMsg: string = 'All fields are mandatory to fill'
  private depositMsg: string = 'Enter deposit amount'
  private buy: string = 'buy'
  private sell: string = 'sell'

  constructor(public navCtrl: NavController, public util: Util, public database: Database) {
    this.transaction = new TransactionData()
    this.depositData = new DepositData()
  }

  ionViewDidEnter(){
  }

  private depositClicked(){
    if(this.util.isBlank(this.depositData.amount)){
      this.util.showToastWithButton(this.depositMsg, ToastConstant.TOAST_TOP, true, StringConstant.OK)
    }
    else{
      this.depositData.date = this.util.getTimeDate().toString();
      this.saveDepositData();
    }
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
      this.util.showToastWithButton(this.toastMsg, ToastConstant.TOAST_TOP, true, StringConstant.OK)
    }
    else if(this.util.isBlank(this.transaction.amount)){
      this.util.showToastWithButton(this.toastMsg, ToastConstant.TOAST_TOP, true, StringConstant.OK)
    }
    else if(this.util.isBlank(this.transaction.coins)){
      this.util.showToastWithButton(this.toastMsg, ToastConstant.TOAST_TOP, true, StringConstant.OK)
    }
    else{
      this.transaction.date = this.util.getTimeDate().toString()
      this.saveTransactionData()
    }
  }

  private saveTransactionData(){
    this.database.insertTransactionData(this.transaction).then((data) => {
      this.util.basicAlert(StringConstant.DATA_SAVED, "")
      // this.util.showToast(StringConstant.DATA_SAVED, ToastConstant.TOAST_TOP)
      this.transaction.rate = ""
      this.transaction.amount = ""
      this.transaction.coins = ""
    },(error) => {
      this.util.showToast(ErrorMsg.ERROR_SAVING_DATA, ToastConstant.TOAST_TOP)
    });
  }

  private saveDepositData(){
    this.database.insertDepositData(this.depositData).then((data) => {
      // this.database.selectAllFromTable('deposit_tbl')
      this.util.basicAlert(StringConstant.DATA_SAVED, "")
      // this.util.showToast(StringConstant.DATA_SAVED, ToastConstant.TOAST_TOP)
      this.depositData.amount = ""
    },(error) => {
      this.util.showToast(ErrorMsg.ERROR_SAVING_DATA, ToastConstant.TOAST_TOP)
    });
  }

}
