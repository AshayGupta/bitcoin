import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TransactionData } from '../../models/transaction-data';
import { DepositData } from '../../models/deposit-data';
import { Util } from '../../providers/util';
import { StringConstant, ToastConstant, ErrorMsg } from '../../providers/constants';
import { Database } from '../../providers/database';

@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html'
})
export class SummaryPage {

  private transactionData: TransactionData[];
  private depositData: DepositData[];
  private profit: any = 0;
  private totalCoins: any = 0;
  private deposit: any = 0;

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
      this.util.showToast(ErrorMsg.ERROR_GET_TRANSACTION_DATA, ToastConstant.TOAST_BOTTOM,)
    });
  }

  private getDepositData(){
    this.database.fetchDepositData().then((data: DepositData[]) => {
      this.depositData = data;
      this.calculateDeposit()
    },(error) => {
      this.util.showToast(ErrorMsg.ERROR_GET_DEPOSIT_DATA, ToastConstant.TOAST_BOTTOM,)
    });
  }

  private calculateProfit(){
    // let buySum: any = 0;
    // let sellSum: any = 0;
    // let buyCoin: any = 0;
    // let sellCoin: any = 0;

    for(let i=0; i<this.transactionData.length; i++){
      if(this.transactionData[i].action == 'buy'){
        this.profit -= parseFloat(this.transactionData[i].amount)
        this.totalCoins += parseFloat(this.transactionData[i].coins)
        console.log("profit = ", this.profit)
        console.log("coins = ", this.totalCoins)
        // console.log(buySum,buyCoin)
      }
      else{
        this.profit += parseFloat(this.transactionData[i].amount)
        this.totalCoins -= parseFloat(this.transactionData[i].coins)
        console.log("profit = ", this.profit)
        console.log("coins = ", this.totalCoins)
        // console.log(sellSum,sellCoin)
      }
    }
    // this.profit = sellSum - buySum
    // this.totalCoins = buyCoin - sellCoin

  }

  private calculateDeposit(){
    // let sum: any = 0;

    for(let i=0; i<this.depositData.length; i++){
      this.deposit += parseFloat(this.depositData[i].amount);
      console.log("deposit = ", this.deposit)
    }
    // this.deposit = sum

  }

}
