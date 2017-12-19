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
  private buy: string = 'buy'
  private sell: string = 'sell'
  private deposit: string = 'deposit'
  private withdraw: string = 'withdraw'
  private profitAmt: any = 0;
  private totalCoins: any = 0;
  private depositAmt: any = 0;

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
      this.util.showToast(ErrorMsg.ERROR_GET_TRANSACTION_DATA, ToastConstant.TOAST_TOP,)
    });
  }

  private getDepositData(){
    this.database.fetchDepositData().then((data: DepositData[]) => {
      this.depositData = data;
      this.calculateDeposit()
    },(error) => {
      this.util.showToast(ErrorMsg.ERROR_GET_DEPOSIT_DATA, ToastConstant.TOAST_TOP,)
    });
  }

  private calculateProfit(){
    this.profitAmt = 0;
    this.totalCoins = 0;
    for(let i=0; i<this.transactionData.length; i++){
      if(this.transactionData[i].action == this.buy){
        this.profitAmt -= parseFloat(this.transactionData[i].amount)
        this.totalCoins += parseFloat(this.transactionData[i].coins)
        console.log("profit = ", this.profitAmt)
        console.log("coins = ", this.totalCoins)
      }
      else{
        this.profitAmt += parseFloat(this.transactionData[i].amount)
        this.totalCoins -= parseFloat(this.transactionData[i].coins)
        console.log("profit = ", this.profitAmt)
        console.log("coins = ", this.totalCoins)
      }
    }
  }

  private calculateDeposit(){
    this.depositAmt = 0;
    for(let i=0; i<this.depositData.length; i++){
      if(this.depositData[i].action == this.deposit){
        this.depositAmt += parseFloat(this.depositData[i].amount);
      }
      else{
        this.depositAmt -= parseFloat(this.depositData[i].amount);
      }
      if(this.depositAmt < 0){
        this.depositAmt = 0;
        this.database.deleteDepositData()
      }
      console.log("deposit = ", this.depositAmt)
    }
  }

}
