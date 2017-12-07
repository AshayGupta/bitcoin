import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TransactionData } from '../../models/transaction-data';
import { Util } from '../../providers/util';
import { String } from '../../providers/constants';
import { Database } from '../../providers/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private transaction: TransactionData;
  private toastMsg: string = 'All fields are mandatory to fill.'

  constructor(public navCtrl: NavController, public util: Util) {
    this.transaction = new TransactionData()
  }

  private buyClicked(){
    this.transaction.action = 'buy'
    this.validate()
  }

  private sellClicked(){
    this.transaction.action = 'sell'
    this.validate()
  }

  private validate(){
    if(this.util.isBlank(this.transaction.rate)){
      this.util.showToast(this.toastMsg, String.TOASTBOTTOM, true, String.OK)
    }
    else if(this.util.isBlank(this.transaction.amount)){
      this.util.showToast(this.toastMsg, String.TOASTBOTTOM, true, String.OK)
    }
    else if(this.util.isBlank(this.transaction.quantity)){
      this.util.showToast(this.toastMsg, String.TOASTBOTTOM, true, String.OK)
    }
    else{

    }
  }

}
