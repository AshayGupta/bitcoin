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
  private profit: any = 0;

  constructor(public navCtrl: NavController, public util: Util, public database: Database) {

  }

  ionViewWillEnter(){
    this.getData()
  }

  private getData(){
    this.database.fetchTransactionData().then((data: TransactionData[]) => {
      this.transactionData = data;
      this.calculateProfit()
    },(error) => {
      this.util.showToast(ErrorMsg.ERROR_GET_TRANSACTION_DATA, ToastConstant.TOAST_BOTTOM,)
    });
  }

  private calculateProfit(){
    let buySum: any = 0;
    let sellSum: any = 0;
    for(let i=0; i<this.transactionData.length; i++){
      if(this.transactionData[i].action == 'buy'){
        buySum += parseFloat(this.transactionData[i].amount)
        console.log(buySum)
      }
      else{
        sellSum += parseFloat(this.transactionData[i].amount)
        console.log(sellSum)
      }
    }
    this.profit = sellSum - buySum
    console.log("profit = ", this.profit)
  }

}
