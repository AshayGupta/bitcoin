import { Component } from '@angular/core';

import { TransactionPage } from '../transaction/transaction';
import { SummaryPage } from '../summary/summary';
import { HomePage } from '../home/home';
import { CalculatorPage } from '../calculator/calculator';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TransactionPage;
  tab3Root = SummaryPage;
  tab4Root = CalculatorPage;

  constructor() {

  }
}
