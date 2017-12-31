import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TransactionPage } from '../pages/transaction/transaction';
import { SummaryPage } from '../pages/summary/summary';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CalculatePage } from '../pages/calculate/calculate';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Util } from '../providers/util';
import { Database } from '../providers/database';
import { SQLite } from '@ionic-native/sqlite';
import { ScrollableTabs } from '../components/scrollable-tabs/scrollable-tabs';

@NgModule({
  declarations: [
    MyApp,
    TransactionPage,
    SummaryPage,
    HomePage,
    TabsPage,
    CalculatePage,
    ScrollableTabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransactionPage,
    SummaryPage,
    HomePage,
    TabsPage,
    CalculatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Util,
    Database,
    SQLite
  ]
})
export class AppModule {}
