import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Util } from '../../providers/util';
import { StringConstant, ToastConstant, ErrorMsg } from '../../providers/constants';

@Component({
  selector: 'page-calculate',
  templateUrl: 'calculate.html',
})
export class CalculatePage {

  private buyRate: any;
  private sellRate: any;
  private amount: any;
  private profit: any = 0;

  constructor(public navCtrl: NavController, public util: Util) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatePage');
  }

  private calculateClicked(){
    if(this.util.isBlank(this.buyRate) || this.util.isBlank(this.sellRate) || this.util.isBlank(this.amount)){
      this.util.showToast("Fill all fields.", ToastConstant.TOAST_BOTTOM)
    }
    else{
      this.profit = (parseFloat(this.sellRate) - parseFloat(this.buyRate)) * (parseFloat(this.amount)/parseFloat(this.buyRate));
    }
  }

}
