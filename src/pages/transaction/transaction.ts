import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public util: Util, public database: Database) {

  }

  ionViewWillEnter(){
    this.getData()
  }

  private getData(){
    this.database.fetchTransactionData().then((data: TransactionData[]) => {
      this.transactionData = data
    },(error) => {
      this.util.showToast(ErrorMsg.ERROR_GET_DATA, ToastConstant.TOAST_BOTTOM,)
    });
  }

}
