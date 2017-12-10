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
      },(error) => {
        console.log("Error in creating bitcoin.db");
      });
  }

  public createTable(){
    this.db.executeSql('CREATE TABLE IF NOT EXISTS transaction_tbl (id INTEGER PRIMARY KEY AUTOINCREMENT, rate TEXT, amount TEXT, quantity TEXT, action TEXT, date TEXT)', {}).catch(e => console.log("Error in creating transaction_tbl", e));
    this.db.executeSql('CREATE TABLE IF NOT EXISTS deposit_tbl (id INTEGER PRIMARY KEY AUTOINCREMENT, amount TEXT, date TEXT)', {}).catch(e => console.log("Error in creating deposit_tbl", e));

    console.log("Tables are created");
  }

  public insertTransactionData(transaction: TransactionData){
    return new Promise((resolve, reject) => {
      let transactionData = [
        this.util.removeNull(transaction.rate),
        this.util.removeNull(transaction.amount),
        this.util.removeNull(transaction.quantity),
        this.util.removeNull(transaction.action),
        this.util.removeNull(transaction.date)
      ]

      let query = "INSERT INTO transaction_tbl (rate, amount, quantity, action, date) VALUES (?,?,?,?,?)";
      this.db.executeSql(query, transactionData).then((data) => {
        resolve(data)
      },(error) => {
        console.log("DB error_insertTransactionData ", error)
        reject(error)
      })
    });
  }

  public fetchTransactionData(){
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM transaction_tbl";
      this.db.executeSql(query, []).then((data) => {
        let transaction_data: any = []
        for(let i=0; i<data.rows.length; i++){
          transaction_data.push(data.rows.item(i))
        }
        resolve(transaction_data)
      },(error) => {
        console.log("DB error_insertTransactionData ", error)
        reject(error)
      })
    });
  }

  public selectAllFromTable(tblName: string){
    let query = "SELECT * FROM " + tblName;
    this.db.executeSql(query, []).then((data) => {
      for(let i=0; i<data.rows.length; i++){
        console.log("All data from " +tblName+ " --> ", data.rows.item(i))
      }
    },(error) => {
      console.log("DB error_selectAllFromTable ", error)
    })
  }

}
