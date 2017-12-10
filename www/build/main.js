webpackJsonp([0],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transaction_transaction__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_summary__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(202);
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
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ashaygupta/Desktop/My Folder/Projects/Ionic Projects/Bitcoin/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Transactions" tabIcon="repeat"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Summary" tabIcon="book"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/Users/ashaygupta/Desktop/My Folder/Projects/Ionic Projects/Bitcoin/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database__ = __webpack_require__(51);
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
    function TransactionPage(navCtrl, util, database) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.database = database;
        this.profit = 0;
    }
    TransactionPage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    TransactionPage.prototype.getData = function () {
        var _this = this;
        this.database.fetchTransactionData().then(function (data) {
            _this.transactionData = data;
            _this.calculateProfit();
        }, function (error) {
            _this.util.showToast(__WEBPACK_IMPORTED_MODULE_3__providers_constants__["a" /* ErrorMsg */].ERROR_GET_DATA, __WEBPACK_IMPORTED_MODULE_3__providers_constants__["c" /* ToastConstant */].TOAST_BOTTOM);
        });
    };
    TransactionPage.prototype.calculateProfit = function () {
        var buySum = 0;
        var sellSum = 0;
        for (var i = 0; i < this.transactionData.length; i++) {
            if (this.transactionData[i].action == 'buy') {
                buySum += parseFloat(this.transactionData[i].amount);
                console.log(buySum);
            }
            else {
                sellSum += parseFloat(this.transactionData[i].amount);
                console.log(sellSum);
            }
        }
        this.profit = sellSum - buySum;
        console.log("profit = ", this.profit);
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/ashaygupta/Desktop/My Folder/Projects/Ionic Projects/Bitcoin/src/pages/transaction/transaction.html"*/`<ion-header>\n  <ion-toolbar color="primary">\n    <!-- <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n    <ion-title>Transactions</ion-title>\n\n    <!-- <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="table-responsive">\n        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="table">\n            <tr style="font-size: 17px;">\n                <th class="th">No.</th>\n                <th class="th">Rate</th>\n                <th class="th">Amount</th>\n                <th class="th">Coins</th>\n                <th class="th">Action</th>\n            </tr>\n            <tr *ngIf="transactionData == undefined || transactionData.length == 0" class="tr-no-data">\n              <td colspan="5" class="td">Data not available</td>\n            </tr>\n            <tr *ngFor="let tran of transactionData">\n                <td class="td-transaction-data">{{tran.id}}.</td>\n                <td class="td-transaction-data">{{tran.rate}}</td>\n                <td class="td-transaction-data">{{tran.amount}}</td>\n                <td class="td-transaction-data">{{tran.coins}}</td>\n                <td class="td-transaction-data" *ngIf="tran.action == \'buy\'"><span class="span-action-buy">{{tran.action}}</span></td>\n                <td class="td-transaction-data" *ngIf="tran.action == \'sell\'"><span class="span-action-sell">{{tran.action}}</span></td>\n            </tr>\n        </table>\n    </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title *ngIf="profit > 0" class="ion-title-profit"><span class="profit-title">PROFIT : </span><span class="pos-profit">{{profit}}</span></ion-title>\n    <ion-title *ngIf="profit <= 0" class="ion-title-profit"><span class="profit-title">PROFIT : </span><span class="neg-profit">{{profit}}</span></ion-title>\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"/Users/ashaygupta/Desktop/My Folder/Projects/Ionic Projects/Bitcoin/src/pages/transaction/transaction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_4__providers_database__["a" /* Database */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 199:
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
    ErrorMsg["ERROR_GET_DATA"] = "Error in getting data";
})(ErrorMsg || (ErrorMsg = {}));
var ToastConstant;
(function (ToastConstant) {
    ToastConstant["TOAST_TOP"] = "top";
    ToastConstant["TOAST_MIDDLE"] = "middle";
    ToastConstant["TOAST_BOTTOM"] = "bottom";
})(ToastConstant || (ToastConstant = {}));
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
    function SummaryPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"/Users/ashaygupta/Desktop/My Folder/Projects/Ionic Projects/Bitcoin/src/pages/summary/summary.html"*/`<ion-header>\n  <ion-toolbar color="primary">\n    <!-- <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n    <ion-title>Summary</ion-title>\n\n    <!-- <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/ashaygupta/Desktop/My Folder/Projects/Ionic Projects/Bitcoin/src/pages/summary/summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_transaction_data__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constants__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database__ = __webpack_require__(51);
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
        this.toastMsg = 'All fields are mandatory to fill.';
        this.buy = 'buy';
        this.sell = 'sell';
        this.transaction = new __WEBPACK_IMPORTED_MODULE_2__models_transaction_data__["a" /* TransactionData */]();
    }
    HomePage.prototype.ionViewDidEnter = function () {
    };
    HomePage.prototype.depositClicked = function () {
    };
    HomePage.prototype.buyClicked = function () {
        this.transaction.action = this.buy;
        this.validate();
    };
    HomePage.prototype.sellClicked = function () {
        this.transaction.action = this.sell;
        this.validate();
    };
    HomePage.prototype.validate = function () {
        if (this.util.isBlank(this.transaction.rate)) {
            this.util.showToastWithButton(this.toastMsg, __WEBPACK_IMPORTED_MODULE_4__providers_constants__["c" /* ToastConstant */].TOAST_BOTTOM, true, __WEBPACK_IMPORTED_MODULE_4__providers_constants__["b" /* StringConstant */].OK);
        }
        else if (this.util.isBlank(this.transaction.amount)) {
            this.util.showToastWithButton(this.toastMsg, __WEBPACK_IMPORTED_MODULE_4__providers_constants__["c" /* ToastConstant */].TOAST_BOTTOM, true, __WEBPACK_IMPORTED_MODULE_4__providers_constants__["b" /* StringConstant */].OK);
        }
        else if (this.util.isBlank(this.transaction.coins)) {
            this.util.showToastWithButton(this.toastMsg, __WEBPACK_IMPORTED_MODULE_4__providers_constants__["c" /* ToastConstant */].TOAST_BOTTOM, true, __WEBPACK_IMPORTED_MODULE_4__providers_constants__["b" /* StringConstant */].OK);
        }
        else {
            this.saveData();
        }
    };
    HomePage.prototype.saveData = function () {
        var _this = this;
        this.database.insertTransactionData(this.transaction).then(function (data) {
            _this.util.basicAlert(__WEBPACK_IMPORTED_MODULE_4__providers_constants__["b" /* StringConstant */].DATA_SAVED, "");
        }, function (error) {
            _this.util.showToast(__WEBPACK_IMPORTED_MODULE_4__providers_constants__["a" /* ErrorMsg */].ERROR_SAVING_DATA, __WEBPACK_IMPORTED_MODULE_4__providers_constants__["c" /* ToastConstant */].TOAST_BOTTOM);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ashaygupta/Desktop/My Folder/Projects/Ionic Projects/Bitcoin/src/pages/home/home.html"*/`<ion-header>\n  <ion-toolbar color="primary">\n    <!-- <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n    <ion-title>Header</ion-title>\n\n    <!-- <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-content>\n\n      <ion-list>\n        <ion-item>\n          <!-- <ion-label floating>Rate</ion-label> -->\n          <ion-input type="number" [(ngModel)]="transaction.rate" placeholder="Rate"></ion-input>\n        </ion-item>\n        <ion-item>\n          <!-- <ion-label floating>Amount</ion-label> -->\n          <ion-input type="number" [(ngModel)]="transaction.amount" placeholder="Amount"></ion-input>\n        </ion-item>\n        <ion-item class="ion-item-border">\n          <!-- <ion-label floating>Coins</ion-label> -->\n          <ion-input type="number" [(ngModel)]="transaction.coins" placeholder="Coins"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-item no-lines>\n        <button ion-button color="danger" outline (click)="buyClicked()" class="button-buy">Buy</button>\n        <button ion-button color="secondary" outline (click)="sellClicked()" class="button-sell">Sell</button>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-item no-lines class="ion-item-center">\n    <button ion-button color="primary" class="button-deposit" (click)="depositClicked()">Deposit</button>\n  </ion-item>\n\n\n\n</ion-content>\n`/*ion-inline-end:"/Users/ashaygupta/Desktop/My Folder/Projects/Ionic Projects/Bitcoin/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_5__providers_database__["a" /* Database */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_transaction_transaction__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_summary_summary__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_util__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__ = __webpack_require__(200);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
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
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_util__["a" /* Util */],
                __WEBPACK_IMPORTED_MODULE_11__providers_database__["a" /* Database */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__["a" /* SQLite */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database__ = __webpack_require__(51);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ashaygupta/Desktop/My Folder/Projects/Ionic Projects/Bitcoin/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/ashaygupta/Desktop/My Folder/Projects/Ionic Projects/Bitcoin/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_database__["a" /* Database */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
    Util = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Util);
    return Util;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util__ = __webpack_require__(50);
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
        this.db.executeSql('CREATE TABLE IF NOT EXISTS deposit_tbl (id INTEGER PRIMARY KEY AUTOINCREMENT, amount TEXT, date TEXT)', {}).catch(function (e) { return console.log("Error in creating deposit_tbl", e); });
        console.log("Tables are created");
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
    Database = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], Database);
    return Database;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map