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
  private profitDisplay: any = 0;
  private totalCoins: any = 0;
  private depositAmt: any = 0;
  private investedAmt: any = 0;
  private edit: boolean = true;

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
      }
      else{
        this.profitAmt += parseFloat(this.transactionData[i].amount)
        this.totalCoins -= parseFloat(this.transactionData[i].coins)
      }
    }
    console.log("profit = ", this.profitAmt)
    console.log("coins = ", this.totalCoins)
    this.totalCoins = this.util.roundDigit(this.totalCoins, 8);
    this.profitAmt = this.util.roundDigit(this.profitAmt, 1);
    this.addInvestedAmt()
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

  private investedAmtEnter(event){
    console.log(event.target.value)
    window.localStorage.setItem("investedAmt", event.target.value);
    this.addInvestedAmt()
  }

  private addInvestedAmt(){
    this.investedAmt = window.localStorage.getItem("investedAmt");
    if(!this.util.isBlank(this.investedAmt)){
      this.profitDisplay = this.util.roundDigit(parseFloat(this.profitAmt) + parseFloat(this.investedAmt), 1);
    }
    else{
      this.profitDisplay = this.util.roundDigit(this.profitAmt, 1);
    }
  }

  private editClicked(){
    if(this.edit == false){
      this.edit = true;
    }
    else{
      this.edit = false;
    }
  }


}
