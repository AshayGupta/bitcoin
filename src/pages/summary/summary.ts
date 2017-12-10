import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TransactionData } from '../../models/transaction-data';
import { Util } from '../../providers/util';
import { StringConstant, ToastConstant, ErrorMsg } from '../../providers/constants';
import { Database } from '../../providers/database';

@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html'
})
export class SummaryPage {

  private transactionData: TransactionData[];
  private profit: any = 0;
  private totalCoins: any = 0;

  constructor(public navCtrl: NavController, public util: Util, public database: Database) {
  }

  ionViewWillEnter(){
    this.getTransactionData()
    this.getDepositData()
  }

  private getTransactionData(){
    this.database.fetchTransactionData().then((data: TransactionData[]) => {
      this.transactionData = data;
      this.calculateProfit()
    },(error) => {
      this.util.showToast(ErrorMsg.ERROR_GET_DATA, ToastConstant.TOAST_BOTTOM,)
    });
  }

  private getDepositData(){

  }

  private calculateProfit(){
    let buySum: any = 0;
    let sellSum: any = 0;
    let buyCoin: any = 0;
    let sellCoin: any = 0;

    for(let i=0; i<this.transactionData.length; i++){
      if(this.transactionData[i].action == 'buy'){
        buySum += parseFloat(this.transactionData[i].amount)
        buyCoin += parseFloat(this.transactionData[i].coins)
        console.log(buySum,buyCoin)
      }
      else{
        sellSum += parseFloat(this.transactionData[i].amount)
        sellCoin += parseFloat(this.transactionData[i].coins)
        console.log(sellSum,sellCoin)
      }
    }
    this.profit = sellSum - buySum
    this.totalCoins = buyCoin - sellCoin
    console.log("profit = ", this.profit)
  }

}
