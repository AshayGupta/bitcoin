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
  private deposit: string = 'deposit'
  private withdraw: string = 'withdraw'

  constructor(public navCtrl: NavController, public util: Util, public database: Database) {
    this.transaction = new TransactionData()
    this.depositData = new DepositData()
  }

  ionViewDidEnter(){
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

  private buyClicked(){
    this.transaction.action = this.buy
    this.validate()
  }

  private sellClicked(){
    this.transaction.action = this.sell
    this.validate()
  }

  private depositClicked(){
    if(this.util.isBlank(this.depositData.deposit_amount)){
      this.util.showToastWithButton(this.depositMsg, ToastConstant.TOAST_TOP, true, StringConstant.OK)
    }
    else{
      this.depositData.date = this.util.getTimeDate().toString();
      this.depositData.action = this.deposit;
      this.depositData.amount = this.depositData.deposit_amount;
      this.saveDepositData();
    }
  }

  private withdrawClicked(){
    if(this.util.isBlank(this.depositData.withdraw_amount)){
      this.util.showToastWithButton(this.depositMsg, ToastConstant.TOAST_TOP, true, StringConstant.OK)
    }
    else{
      this.depositData.date = this.util.getTimeDate().toString();
      this.depositData.action = this.withdraw;
      this.depositData.amount = this.depositData.withdraw_amount;
      this.saveDepositData();
    }
  }

  private saveDepositData(){
    this.database.insertDepositData(this.depositData).then((data) => {
      // this.database.selectAllFromTable('deposit_tbl')
      this.util.basicAlert(StringConstant.DATA_SAVED, "")
      this.depositData.deposit_amount = "";
      this.depositData.withdraw_amount = "";
    },(error) => {
      this.util.showToast(ErrorMsg.ERROR_SAVING_DATA, ToastConstant.TOAST_TOP)
    });
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



}
