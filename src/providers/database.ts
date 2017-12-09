import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';
import { Util } from '../providers/util';

import { TransactionData } from '../models/transaction-data';

@Injectable()
export class Database{

  db: SQLiteObject

  public constructor(private util: Util, private sqlite: SQLite) {}

  public createDatabase(){
      this.sqlite.create({ name: "bitcoin.db", location: "default" }).then((db: SQLiteObject) => {
        this.db = db
        this.createTable()
      })
      .catch(e => console.log("Error in creating bitcoin.db", e));
  }

  public createTable(){
    this.db.executeSql('CREATE TABLE IF NOT EXISTS transaction(id INTEGER PRIMARY KEY AUTOINCREMENT, rate TEXT, amount TEXT, quantity TEXT, action TEXT, date TEXT)', {})
    this.db.executeSql('CREATE TABLE IF NOT EXISTS deposit(id INTEGER PRIMARY KEY AUTOINCREMENT, amount TEXT, date TEXT)', {})
  }

  public insertTransactionData(transaction: TransactionData){
    return new Promise((resolve, reject) => {
      let transactionData = [
        this.util.removeNull(transaction.rate),
        this.util.removeNull(transaction.amount),
        this.util.removeNull(transaction.quantity),
        this.util.removeNull(transaction.quantity),
        this.util.removeNull(transaction.date)
      ]

      let query = "INSERT INTO transaction (rate, amount, quantity, action, date) VALUES (?,?,?,?,?)";
      this.db.executeSql(query, transactionData).then((data) => {
        resolve(data)
      },(error) => {
        console.log("DB error_insertTransactionData ", error)
        reject(error)
      })
    });
  }

}
