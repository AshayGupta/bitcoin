webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transaction_transaction__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_summary__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calculator_calculator__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__transaction_transaction__["a" /* TransactionPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__summary_summary__["a" /* SummaryPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__calculator_calculator__["a" /* CalculatorPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ashaygupta/Desktop/My Folder/myApps/Ionic Projects/Bitcoin/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Transactions" tabIcon="repeat"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Summary" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Calculate" tabIcon="calculator"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/Users/ashaygupta/Desktop/My Folder/myApps/Ionic Projects/Bitcoin/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransactionPage = (function () {
    function TransactionPage(navCtrl, util, database, alertCtrl) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.profit = 0;
    }
    TransactionPage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    TransactionPage.prototype.getData = function () {
        var _this = this;
        this.database.fetchTransactionData().then(function (data) {
            _this.transactionData = data;
            // this.calculateProfit()
        }, function (error) {
            _this.util.showToast(__WEBPACK_IMPORTED_MODULE_3__providers_constants__["a" /* ErrorMsg */].ERROR_GET_TRANSACTION_DATA, __WEBPACK_IMPORTED_MODULE_3__providers_constants__["c" /* ToastConstant */].TOAST_TOP);
        });
    };
    // private calculateProfit(){
    //   this.profit = 0;
    //   for(let i=0; i<this.transactionData.length; i++){
    //     if(this.transactionData[i].action == 'buy'){
    //       this.profit -= parseFloat(this.transactionData[i].amount)
    //       console.log("profit = ", this.profit)
    //     }
    //     else{
    //       this.profit += parseFloat(this.transactionData[i].amount)
    //       console.log("profit = ", this.profit)
    //     }
    //   }
    // }
    TransactionPage.prototype.trashClicked = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Delete Transaction!',
            message: "Enter a No. to delete transaction.",
            enableBackdropDismiss: true,
            inputs: [
                {
                    name: 'id',
                    placeholder: 'Enter No.'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.database.deleteTransactionData(data.id);
                    }
                }
            ]
        });
        prompt.present();
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/ashaygupta/Desktop/My Folder/myApps/Ionic Projects/Bitcoin/src/pages/transaction/transaction.html"*/`<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>Transactions</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="trashClicked()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="table-responsive">\n        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="table">\n            <tr style="font-size: 16px;">\n                <th class="th">No.</th>\n                <th class="th">Rate</th>\n                <th class="th">Amount</th>\n                <th class="th">Coins</th>\n                <th class="th">Action</th>\n            </tr>\n            <tr *ngIf="transactionData == undefined || transactionData.length == 0" class="tr-no-data">\n              <td colspan="5" class="td">Data not available</td>\n            </tr>\n            <tr *ngFor="let tran of transactionData">\n                <td class="td-transaction-data">{{tran.id}}.</td>\n                <td class="td-transaction-data">{{tran.rate}}</td>\n                <td class="td-transaction-data">{{tran.amount}}</td>\n                <td class="td-transaction-data">{{tran.coins}}</td>\n                <td class="td-transaction-data" *ngIf="tran.action == \'buy\'"><span class="span-action-buy">{{tran.action}}</span></td>\n                <td class="td-transaction-data" *ngIf="tran.action == \'sell\'"><span class="span-action-sell">{{tran.action}}</span></td>\n            </tr>\n        </table>\n    </div>\n\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-toolbar>\n    <ion-title *ngIf="profit > 0" class="ion-title-profit"><span class="profit-title">Envisioned PROFIT : </span><span class="pos-profit">{{profit}}</span></ion-title>\n    <ion-title *ngIf="profit <= 0" class="ion-title-profit"><span class="profit-title">Envisioned PROFIT : </span><span class="neg-profit">{{profit}}</span></ion-title>\n  </ion-toolbar>\n</ion-footer> -->\n`/*ion-inline-end:"/Users/ashaygupta/Desktop/My Folder/myApps/Ionic Projects/Bitcoin/src/pages/transaction/transaction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_4__providers_database__["a" /* Database */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SummaryPage = (function () {
    function SummaryPage(navCtrl, util, database) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.database = database;
        this.buy = 'buy';
        this.sell = 'sell';
        this.deposit = 'deposit';
        this.withdraw = 'withdraw';
        this.profitAmt = 0;
        this.profitDisplay = 0;
        this.totalCoins = 0;
        this.depositAmt = 0;
        this.investedAmt = 0;
        this.edit = true;
    }
    SummaryPage.prototype.ionViewWillEnter = function () {
        this.getTransactionData();
        this.getDepositData();
    };
    SummaryPage.prototype.getTransactionData = function () {
        var _this = this;
        this.database.fetchTransactionData().then(function (data) {
            _this.transactionData = data;
            _this.calculateProfit();
        }, function (error) {
            _this.util.showToast(__WEBPACK_IMPORTED_MODULE_3__providers_constants__["a" /* ErrorMsg */].ERROR_GET_TRANSACTION_DATA, __WEBPACK_IMPORTED_MODULE_3__providers_constants__["c" /* ToastConstant */].TOAST_TOP);
        });
    };
    SummaryPage.prototype.getDepositData = function () {
        var _this = this;
        this.database.fetchDepositData().then(function (data) {
            _this.depositData = data;
            _this.calculateDeposit();
        }, function (error) {
            _this.util.showToast(__WEBPACK_IMPORTED_MODULE_3__providers_constants__["a" /* ErrorMsg */].ERROR_GET_DEPOSIT_DATA, __WEBPACK_IMPORTED_MODULE_3__providers_constants__["c" /* ToastConstant */].TOAST_TOP);
        });
    };
    SummaryPage.prototype.calculateProfit = function () {
        this.profitAmt = 0;
        this.totalCoins = 0;
        for (var i = 0; i < this.transactionData.length; i++) {
            if (this.transactionData[i].action == this.buy) {
                this.profitAmt -= parseFloat(this.transactionData[i].amount);
                this.totalCoins += parseFloat(this.transactionData[i].coins);
                console.log("profit = ", this.profitAmt);
                console.log("coins = ", this.totalCoins);
            }
            else {
                this.profitAmt += parseFloat(this.transactionData[i].amount);
                this.totalCoins -= parseFloat(this.transactionData[i].coins);
                console.log("profit = ", this.profitAmt);
                console.log("coins = ", this.totalCoins);
            }
        }
        this.totalCoins.toFixed(8);
        // this.totalCoins = Math.round(this.totalCoins * 100000000) / 100000000;
        this.addInvestedAmt();
    };
    SummaryPage.prototype.calculateDeposit = function () {
        this.depositAmt = 0;
        for (var i = 0; i < this.depositData.length; i++) {
            if (this.depositData[i].action == this.deposit) {
                this.depositAmt += parseFloat(this.depositData[i].amount);
            }
            else {
                this.depositAmt -= parseFloat(this.depositData[i].amount);
            }
            if (this.depositAmt < 0) {
                this.depositAmt = 0;
                this.database.deleteDepositData();
            }
            console.log("deposit = ", this.depositAmt);
        }
    };
    SummaryPage.prototype.investedAmtEnter = function (event) {
        console.log(event.target.value);
        window.localStorage.setItem("investedAmt", event.target.value);
        this.addInvestedAmt();
    };
    SummaryPage.prototype.addInvestedAmt = function () {
        this.investedAmt = window.localStorage.getItem("investedAmt");
        if (!this.util.isBlank(this.investedAmt)) {
            this.profitDisplay = this.profitAmt + parseFloat(this.investedAmt);
        }
        else {
            this.profitDisplay = this.profitAmt;
        }
    };
    SummaryPage.prototype.editClicked = function () {
        if (this.edit == false) {
            this.edit = true;
        }
        else {
            this.edit = false;
        }
    };
    SummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"/Users/ashaygupta/Desktop/My Folder/myApps/Ionic Projects/Bitcoin/src/pages/summary/summary.html"*/`<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>Summary</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="editClicked()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content class="card-content">\n      <span class="left-text">Deposit</span>\n      <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward" class="forward-icon"></ion-icon>\n      <span class="right-text">Rs. {{depositAmt}}</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content class="card-content">\n      <ion-item style="padding-left: 0px; font-size: 20px">\n        <ion-input type="number" placeholder="Invested Amount" [(ngModel)]="investedAmt" (keyup)="investedAmtEnter($event)" [disabled]="edit"></ion-input>\n        <button ion-button icon-only item-right (click)="editClicked()" class="edit-invested">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content class="card-content">\n      <span class="left-text">Coins</span>\n      <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward" class="forward-icon"></ion-icon>\n      <span class="right-text">{{totalCoins}}</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content class="card-content">\n      <span class="left-text">Profit</span>\n      <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward" class="forward-icon"></ion-icon>\n      <span class="right-text">Rs. {{profitDisplay}}</span>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n`/*ion-inline-end:"/Users/ashaygupta/Desktop/My Folder/myApps/Ionic Projects/Bitcoin/src/pages/summary/summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_4__providers_database__["a" /* Database */]])
    ], SummaryPage);
    return SummaryPage;
}());

//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_transaction_data__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_deposit_data__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constants__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, util, database) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.database = database;
        this.toastMsg = 'All fields are mandatory to fill';
        this.depositMsg = 'Enter deposit amount';
        this.buy = 'buy';
        this.sell = 'sell';
        this.deposit = 'deposit';
        this.withdraw = 'withdraw';
        this.transaction = new __WEBPACK_IMPORTED_MODULE_2__models_transaction_data__["a" /* TransactionData */]();
        this.depositData = new __WEBPACK_IMPORTED_MODULE_3__models_deposit_data__["a" /* DepositData */]();
    }
    HomePage.prototype.ionViewDidEnter = function () {
    };
    HomePage.prototype.validate = function () {
        if (this.util.isBlank(this.transaction.rate)) {
            this.util.showToastWithButton(this.toastMsg, __WEBPACK_IMPORTED_MODULE_5__providers_constants__["c" /* ToastConstant */].TOAST_TOP, true, __WEBPACK_IMPORTED_MODULE_5__providers_constants__["b" /* StringConstant */].OK);
        }
        else if (this.util.isBlank(this.transaction.amount)) {
            this.util.showToastWithButton(this.toastMsg, __WEBPACK_IMPORTED_MODULE_5__providers_constants__["c" /* ToastConstant */].TOAST_TOP, true, __WEBPACK_IMPORTED_MODULE_5__providers_constants__["b" /* StringConstant */].OK);
        }
        else if (this.util.isBlank(this.transaction.coins)) {
            this.util.showToastWithButton(this.toastMsg, __WEBPACK_IMPORTED_MODULE_5__providers_constants__["c" /* ToastConstant */].TOAST_TOP, true, __WEBPACK_IMPORTED_MODULE_5__providers_constants__["b" /* StringConstant */].OK);
        }
        else {
            this.transaction.date = this.util.getTimeDate().toString();
            this.saveTransactionData();
        }
    };
    HomePage.prototype.buyClicked = function () {
        this.transaction.action = this.buy;
        this.validate();
    };
    HomePage.prototype.sellClicked = function () {
        this.transaction.action = this.sell;
        this.validate();
    };
    HomePage.prototype.depositClicked = function () {
        if (this.util.isBlank(this.depositData.deposit_amount)) {
            this.util.showToastWithButton(this.depositMsg, __WEBPACK_IMPORTED_MODULE_5__providers_constants__["c" /* ToastConstant */].TOAST_TOP, true, __WEBPACK_IMPORTED_MODULE_5__providers_constants__["b" /* StringConstant */].OK);
        }
        else {
            this.depositData.date = this.util.getTimeDate().toString();
            this.depositData.action = this.deposit;
            this.depositData.amount = this.depositData.deposit_amount;
            this.saveDepositData();
        }
    };
    HomePage.prototype.withdrawClicked = function () {
        if (this.util.isBlank(this.depositData.withdraw_amount)) {
            this.util.showToastWithButton(this.depositMsg, __WEBPACK_IMPORTED_MODULE_5__providers_constants__["c" /* ToastConstant */].TOAST_TOP, true, __WEBPACK_IMPORTED_MODULE_5__providers_constants__["b" /* StringConstant */].OK);
        }
        else {
            this.depositData.date = this.util.getTimeDate().toString();
            this.depositData.action = this.withdraw;
            this.depositData.amount = this.depositData.withdraw_amount;
            this.saveDepositData();
        }
    };
    HomePage.prototype.saveDepositData = function () {
        var _this = this;
        this.database.insertDepositData(this.depositData).then(function (data) {
            // this.database.selectAllFromTable('deposit_tbl')
            _this.util.basicAlert(__WEBPACK_IMPORTED_MODULE_5__providers_constants__["b" /* StringConstant */].DATA_SAVED, "");
            _this.depositData.deposit_amount = "";
            _this.depositData.withdraw_amount = "";
        }, function (error) {
            _this.util.showToast(__WEBPACK_IMPORTED_MODULE_5__providers_constants__["a" /* ErrorMsg */].ERROR_SAVING_DATA, __WEBPACK_IMPORTED_MODULE_5__providers_constants__["c" /* ToastConstant */].TOAST_TOP);
        });
    };
    HomePage.prototype.saveTransactionData = function () {
        var _this = this;
        this.database.insertTransactionData(this.transaction).then(function (data) {
            _this.util.basicAlert(__WEBPACK_IMPORTED_MODULE_5__providers_constants__["b" /* StringConstant */].DATA_SAVED, "");
            // this.util.showToast(StringConstant.DATA_SAVED, ToastConstant.TOAST_TOP)
            _this.transaction.rate = "";
            _this.transaction.amount = "";
            _this.transaction.coins = "";
        }, function (error) {
            _this.util.showToast(__WEBPACK_IMPORTED_MODULE_5__providers_constants__["a" /* ErrorMsg */].ERROR_SAVING_DATA, __WEBPACK_IMPORTED_MODULE_5__providers_constants__["c" /* ToastConstant */].TOAST_TOP);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ashaygupta/Desktop/My Folder/myApps/Ionic Projects/Bitcoin/src/pages/home/home.html"*/`<ion-header>\n  <ion-toolbar color="primary">\n    <!-- <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n    <ion-title>Home</ion-title>\n\n    <!-- <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-content>\n      <!-- <ion-list> -->\n        <ion-item>\n          <ion-label stacked>Rate</ion-label>\n          <ion-input type="number" [(ngModel)]="transaction.rate"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Amount</ion-label>\n          <ion-input type="number" [(ngModel)]="transaction.amount"></ion-input>\n        </ion-item>\n        <ion-item class="ion-item-border">\n          <ion-label stacked>Coins</ion-label>\n          <ion-input type="number" [(ngModel)]="transaction.coins"></ion-input>\n        </ion-item>\n      <!-- </ion-list> -->\n\n      <ion-item class="remove-bottom">\n        <button ion-button color="danger" outline (click)="buyClicked()" class="button-buy">Buy</button>\n        <button ion-button color="secondary" outline (click)="sellClicked()" class="button-sell">Sell</button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-input type="number" [(ngModel)]="depositData.amount" placeholder="Amount" class="deposit-amount"></ion-input>\n\n  <ion-item no-lines class="ion-item-center">\n    <button ion-button color="primary" class="button-deposit" (click)="depositClicked()">Deposit</button>\n  </ion-item> -->\n\n    <ion-item>\n        <ion-input type="number" [(ngModel)]="depositData.deposit_amount" placeholder="Amount" class=""></ion-input>\n        <button ion-button item-right color="primary" class="button-deposit" (click)="depositClicked()">Deposit</button>\n    </ion-item>\n    <ion-item>\n        <ion-input type="number" [(ngModel)]="depositData.withdraw_amount" placeholder="Amount" class=""></ion-input>\n        <button ion-button item-right color="primary" class="button-deposit" (click)="withdrawClicked()">Withdraw</button>\n    </ion-item>\n\n\n\n\n</ion-content>\n`/*ion-inline-end:"/Users/ashaygupta/Desktop/My Folder/myApps/Ionic Projects/Bitcoin/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_6__providers_database__["a" /* Database */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalculatorPage = (function () {
    function CalculatorPage(navCtrl, util) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.profit = 0;
    }
    CalculatorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalculatorPage');
    };
    CalculatorPage.prototype.calculateClicked = function () {
        if (this.util.isBlank(this.buyRate) || this.util.isBlank(this.sellRate) || this.util.isBlank(this.amount)) {
            this.util.showToast("Fill all fields.", __WEBPACK_IMPORTED_MODULE_3__providers_constants__["c" /* ToastConstant */].TOAST_BOTTOM);
        }
        else {
            this.profit = (parseFloat(this.sellRate) - parseFloat(this.buyRate)) * (parseFloat(this.amount) / parseFloat(this.buyRate));
        }
    };
    CalculatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calculator',template:/*ion-inline-start:"/Users/ashaygupta/Desktop/My Folder/myApps/Ionic Projects/Bitcoin/src/pages/calculator/calculator.html"*/`<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>Calculator</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="editClicked()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-list> -->\n    <ion-item >\n      <ion-label stacked>Buy Rate</ion-label>\n      <ion-input type="number" placeholder="Enter Buy Rate" [(ngModel)]="buyRate"></ion-input>\n    </ion-item>\n\n    <ion-item >\n      <ion-label stacked>Sell Rate</ion-label>\n      <ion-input type="number" placeholder="Enter Sell Rate" [(ngModel)]="sellRate"></ion-input>\n    </ion-item>\n\n    <ion-item >\n      <ion-label stacked>Amount</ion-label>\n      <ion-input type="number" placeholder="Enter Amount" [(ngModel)]="amount"></ion-input>\n    </ion-item>\n  <!-- </ion-list> -->\n\n  <ion-item no-lines class="ion-item-center">\n    <button ion-button color="primary" class="button-calculate" (click)="calculateClicked()">Calculate</button>\n  </ion-item>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title class="ion-title-profit"><span class="profit-title">Profit : </span><span class="pos-profit">{{profit}}</span></ion-title>\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"/Users/ashaygupta/Desktop/My Folder/myApps/Ionic Projects/Bitcoin/src/pages/calculator/calculator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_util__["a" /* Util */]])
    ], CalculatorPage);
    return CalculatorPage;
}());

//# sourceMappingURL=calculator.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_transaction_transaction__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_summary_summary__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_calculator_calculator__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_util__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_sqlite__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_scrollable_tabs_scrollable_tabs__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_summary_summary__["a" /* SummaryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_calculator_calculator__["a" /* CalculatorPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_scrollable_tabs_scrollable_tabs__["a" /* ScrollableTabs */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_summary_summary__["a" /* SummaryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_calculator_calculator__["a" /* CalculatorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_util__["a" /* Util */],
                __WEBPACK_IMPORTED_MODULE_12__providers_database__["a" /* Database */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_sqlite__["a" /* SQLite */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, database) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            database.createDatabase();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ashaygupta/Desktop/My Folder/myApps/Ionic Projects/Bitcoin/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/ashaygupta/Desktop/My Folder/myApps/Ionic Projects/Bitcoin/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_database__["a" /* Database */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionData; });
var TransactionData = (function () {
    function TransactionData() {
    }
    return TransactionData;
}());

//# sourceMappingURL=transaction-data.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositData; });
var DepositData = (function () {
    function DepositData() {
    }
    return DepositData;
}());

//# sourceMappingURL=deposit-data.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollableTabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollableTabs = (function () {
    function ScrollableTabs(elemRef, renderer) {
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.opts = {};
        this.tabs = [];
    }
    ScrollableTabs.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('opts')) {
            if (changes['opts'].currentValue.refresh) {
                setTimeout(function () {
                    _this.setAnchorStyles();
                    _this.scrollToselectedTab();
                }, 300);
            }
        }
    };
    ScrollableTabs.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.nativeTabbar = this.ionTabs._tabbar.nativeElement;
        this.tabs = this.ionTabs._tabs;
        this.currentTabIndex = typeof (this.ionTabs.selectedIndex) == "undefined" ? 0 : this.ionTabs.selectedIndex;
        this.ionTabs.ionChange.subscribe(function () {
            _this.scrollToselectedTab();
        });
        var _loop_1 = function (i) {
            this_1.tabs[i].ionSelect.subscribe(function () {
                _this.currentTabIndex = i;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.tabs.length; i++) {
            _loop_1(i);
        }
        // set tabbar overflow-x: scroll
        this.renderer.setElementStyle(this.nativeTabbar, "overflow-x", "scroll");
        // set tabbar overflow-y: hidden
        this.renderer.setElementStyle(this.nativeTabbar, "overflow-y", "hidden");
        this.setAnchorStyles();
        this.scrollToselectedTab();
    };
    ScrollableTabs.prototype.onResize = function (event) {
        var _this = this;
        this.setAnchorStyles();
        setTimeout(function () {
            _this.scrollToselectedTab();
        }, 300);
    };
    ScrollableTabs.prototype.setAnchorStyles = function () {
        if (typeof (this.nativeTabbar) != "undefined") {
            var tabBar_width = this.nativeTabbar.clientWidth;
            var numOfTabs = this.tabs.length;
            var numOfVisibleAnchors = 0;
            var sumOfVisibleAnchorWidth = 0;
            // loop through tab elements in tabs
            for (var i = 0; i < numOfTabs; i++) {
                var element = this.nativeTabbar.children[i];
                // when Tab visible (effecting show property)
                if (this.tabs[i]._isShown) {
                    numOfVisibleAnchors++;
                    // set <a> display: inline-table
                    this.renderer.setElementStyle(element, 'display', 'inline-table');
                    // set <a> width: 6rem
                    this.renderer.setElementStyle(element, 'width', '6rem');
                    // extra padding for title-only tags only
                    if (element.classList.contains("has-title-only")) {
                        // set <a> padding-top: 1.5rem
                        this.renderer.setElementStyle(element, 'padding-top', '1.5rem');
                    }
                    sumOfVisibleAnchorWidth += element.clientWidth;
                }
                else {
                    // set <a> display: none
                    this.renderer.setElementStyle(element, 'display', 'none');
                }
            }
            // to prevent extra space at end
            if (sumOfVisibleAnchorWidth < tabBar_width) {
                var anchorWidth = tabBar_width / numOfVisibleAnchors;
                for (var i = 0; i < numOfTabs; i++) {
                    var element = this.nativeTabbar.children[i];
                    // when Tab not not visible effecting show property
                    if (!element.classList.contains("tab-hidden")) {
                        this.renderer.setElementStyle(element, 'width', anchorWidth + 'px');
                    }
                }
            }
        }
    };
    ScrollableTabs.prototype.scrollToselectedTab = function () {
        if (typeof this.nativeTabbar != 'undefined') {
            var tabBar_width = this.nativeTabbar.clientWidth;
            var selectedTab = this.nativeTabbar.children[this.currentTabIndex];
            var selectedTab_Width = selectedTab.clientWidth;
            var selectedTab_LeftOffset = document.getElementById(selectedTab.id).offsetLeft;
            var selectedTab_mid = selectedTab_LeftOffset + (selectedTab_Width / 2);
            var newScrollLeft = selectedTab_mid - (tabBar_width / 2);
            this.scrollXTo(newScrollLeft, 300).then(function () { });
        }
    };
    ScrollableTabs.prototype.scrollXTo = function (x, duration) {
        if (duration === void 0) { duration = 300; }
        // scroll animation loop w/ easing
        var tabbar = this.nativeTabbar;
        if (!tabbar) {
            // invalid element
            return Promise.resolve();
        }
        x = x || 0;
        var originalRaf = (window[window['Zone']['__symbol__']('requestAnimationFrame')] || window[window['Zone']['__symbol__']('webkitRequestAnimationFrame')]);
        var nativeRaf = originalRaf !== undefined ? originalRaf['bind'](window) : window.requestAnimationFrame.bind(window);
        var fromX = tabbar.scrollLeft;
        var maxAttempts = (duration / 16) + 100;
        return new Promise(function (resolve) {
            var startTime;
            var attempts = 0;
            var isPlaying;
            // scroll loop
            function step() {
                attempts++;
                if (!tabbar || !isPlaying || attempts > maxAttempts) {
                    isPlaying = false;
                    resolve();
                    return;
                }
                var time = Math.min(1, ((Date.now() - startTime) / duration));
                // where .5 would be 50% of time on a linear scale easedT gives a
                // fraction based on the easing method
                var easedT = (--time) * time * time + 1;
                if (fromX !== x) {
                    tabbar.scrollLeft = Math.floor((easedT * (x - fromX)) + fromX);
                }
                if (easedT < 1) {
                    nativeRaf(step);
                }
                else {
                    // done
                    resolve();
                }
            }
            // start scroll loop
            isPlaying = true;
            // chill out for a frame first
            nativeRaf(function () {
                startTime = Date.now();
                nativeRaf(step);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('scrollable-tabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Tabs */])
    ], ScrollableTabs.prototype, "ionTabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('opts'),
        __metadata("design:type", Object)
    ], ScrollableTabs.prototype, "opts", void 0);
    ScrollableTabs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[scrollable-tabs]',
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ScrollableTabs);
    return ScrollableTabs;
}());

//# sourceMappingURL=scrollable-tabs.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Util = (function () {
    function Util(toastCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    Util.prototype.basicAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    Util.prototype.isBlank = function (str) {
        if (str == null || str == 'null' || str == undefined || str == 'undefined') {
            return true;
        }
        else if (str.trim().length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Util.prototype.showToast = function (msg, position) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: position,
            dismissOnPageChange: true
        });
        toast.present();
    };
    Util.prototype.showToastWithButton = function (msg, position, showCloseButton, closeButtonText) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: position,
            showCloseButton: showCloseButton,
            closeButtonText: closeButtonText,
            dismissOnPageChange: true
        });
        toast.present();
    };
    Util.prototype.removeNull = function (str) {
        if (str == "null" || str == null || str == undefined) {
            return "";
        }
        else {
            return str;
        }
    };
    Util.prototype.getTimeDate = function () {
        return new Date().getTime();
    };
    Util = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Util);
    return Util;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Database = (function () {
    function Database(util, sqlite) {
        this.util = util;
        this.sqlite = sqlite;
    }
    Database.prototype.createDatabase = function () {
        var _this = this;
        this.sqlite.create({ name: "bitcoin.db", location: "default" }).then(function (db) {
            _this.db = db;
            _this.createTable();
        }, function (error) {
            console.log("Error in creating bitcoin.db");
        });
    };
    Database.prototype.createTable = function () {
        this.db.executeSql('CREATE TABLE IF NOT EXISTS transaction_tbl (id INTEGER PRIMARY KEY AUTOINCREMENT, rate TEXT, amount TEXT, coins TEXT, action TEXT, date TEXT)', {}).catch(function (e) { return console.log("Error in creating transaction_tbl", e); });
        this.db.executeSql('CREATE TABLE IF NOT EXISTS deposit_tbl (id INTEGER PRIMARY KEY AUTOINCREMENT, amount TEXT, action TEXT, date TEXT)', {}).catch(function (e) { return console.log("Error in creating deposit_tbl", e); });
        console.log("Tables are created");
    };
    Database.prototype.selectAllFromTable = function (tblName) {
        var query = "SELECT * FROM " + tblName;
        this.db.executeSql(query, []).then(function (data) {
            for (var i = 0; i < data.rows.length; i++) {
                console.log("All data from " + tblName + " --> ", data.rows.item(i));
            }
        }, function (error) {
            console.log("DB error_selectAllFromTable ", error);
        });
    };
    Database.prototype.insertTransactionData = function (transaction) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var transactionData = [
                _this.util.removeNull(transaction.rate),
                _this.util.removeNull(transaction.amount),
                _this.util.removeNull(transaction.coins),
                _this.util.removeNull(transaction.action),
                _this.util.removeNull(transaction.date)
            ];
            var query = "INSERT INTO transaction_tbl (rate, amount, coins, action, date) VALUES (?,?,?,?,?)";
            _this.db.executeSql(query, transactionData).then(function (data) {
                resolve(data);
            }, function (error) {
                console.log("DB error_insertTransactionData ", error);
                reject(error);
            });
        });
    };
    Database.prototype.fetchTransactionData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * FROM transaction_tbl";
            _this.db.executeSql(query, []).then(function (data) {
                var transaction_data = [];
                for (var i = 0; i < data.rows.length; i++) {
                    transaction_data.push(data.rows.item(i));
                }
                resolve(transaction_data);
            }, function (error) {
                console.log("DB error_insertTransactionData ", error);
                reject(error);
            });
        });
    };
    Database.prototype.insertDepositData = function (deposit) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var depositData = [
                _this.util.removeNull(deposit.amount),
                _this.util.removeNull(deposit.action),
                _this.util.removeNull(deposit.date)
            ];
            var query = "INSERT INTO deposit_tbl (amount, action, date) VALUES (?,?,?)";
            _this.db.executeSql(query, depositData).then(function (data) {
                resolve(data);
            }, function (error) {
                console.log("DB error_insertDepositData ", error);
                reject(error);
            });
        });
    };
    Database.prototype.fetchDepositData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * FROM deposit_tbl";
            _this.db.executeSql(query, []).then(function (data) {
                var deposit_data = [];
                for (var i = 0; i < data.rows.length; i++) {
                    deposit_data.push(data.rows.item(i));
                }
                resolve(deposit_data);
            }, function (error) {
                console.log("DB error_fetchDepositData ", error);
                reject(error);
            });
        });
    };
    Database.prototype.deleteTransactionData = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "DELETE FROM transaction_tbl WHERE id = '" + id + "'";
            _this.db.executeSql(query, []).then(function (data) {
                resolve(data);
            }, function (error) {
                console.log("DB error_deleteTransactionData ", error);
                reject(error);
            });
        });
    };
    Database.prototype.deleteDepositData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "DELETE FROM deposit_tbl";
            _this.db.executeSql(query, []).then(function (data) {
                resolve(data);
            }, function (error) {
                console.log("DB error_deleteDepositData ", error);
                reject(error);
            });
        });
    };
    Database = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], Database);
    return Database;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StringConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToastConstant; });
var StringConstant;
(function (StringConstant) {
    StringConstant["OK"] = "OK";
    StringConstant["DATA_SAVED"] = "Data saved";
})(StringConstant || (StringConstant = {}));
var ErrorMsg;
(function (ErrorMsg) {
    ErrorMsg["ERROR_SAVING_DATA"] = "Error in saving data";
    ErrorMsg["ERROR_GET_TRANSACTION_DATA"] = "Error in getting transaction data";
    ErrorMsg["ERROR_GET_DEPOSIT_DATA"] = "Error in getting deposit data";
})(ErrorMsg || (ErrorMsg = {}));
var ToastConstant;
(function (ToastConstant) {
    ToastConstant["TOAST_TOP"] = "top";
    ToastConstant["TOAST_MIDDLE"] = "middle";
    ToastConstant["TOAST_BOTTOM"] = "bottom";
})(ToastConstant || (ToastConstant = {}));
//# sourceMappingURL=constants.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map