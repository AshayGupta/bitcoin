import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';
import { Util } from '../providers/util';

import { TransactionData } from '../models/transaction-data';
import { DepositData } from '../models/deposit-data';

@Injectable()
export class Database{

  db: SQLiteObject

  public constructor(private util: Util, private sqlite: SQLite) {}

  public createDatabase(){
      return new Promise((resolve, reject) => {
        this.sqlite.create({ name: "bitcoin.db", location: "default" }).then((db: SQLiteObject) => {
          this.db = db
          resolve('')
        },(error) => {
          console.log("Error in creating bitcoin.db");
        });
      });
  }

  public createTable(){
    this.db.executeSql('CREATE TABLE IF NOT EXISTS transaction_tbl (id INTEGER PRIMARY KEY AUTOINCREMENT, rate TEXT, amount TEXT, coins TEXT, action TEXT, date TEXT)', {}).catch(e => console.log("Error in creating transaction_tbl ", e));
    this.db.executeSql('CREATE TABLE IF NOT EXISTS deposit_tbl (id INTEGER PRIMARY KEY AUTOINCREMENT, amount TEXT, action TEXT, date TEXT)', {}).catch(e => console.log("Error in creating deposit_tbl ", e));

    this.alterTable()
    console.log("Tables are created");
  }

  public alterTable(){
    this.db.executeSql("ALTER TABLE transaction_tbl ADD COLUMN trans_selected TEXT",[]).catch(e => console.log("Column trans_selected is not altered. ", e));
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

  public insertTransactionData(transaction: TransactionData){
    return new Promise((resolve, reject) => {
      let transactionData = [
        this.util.removeNull(transaction.rate),
        this.util.removeNull(transaction.amount),
        this.util.removeNull(transaction.coins),
        this.util.removeNull(transaction.action),
        this.util.removeNull(transaction.date),
        this.util.removeNull(transaction.trans_selected),
      ]

      let query = "INSERT INTO transaction_tbl (rate, amount, coins, action, date, trans_selected) VALUES (?,?,?,?,?,?)";
      this.db.executeSql(query, transactionData).then((data) => {
        resolve(data)
      },(error) => {
        console.log("DB error_insertTransactionData ", error)
        reject(error)
      })
    });
  }

  public updateTransactionData(transaction: TransactionData){
    let transactionData = [
      // this.util.removeNull(transaction.rate),
      // this.util.removeNull(transaction.amount),
      // this.util.removeNull(transaction.coins),
      // this.util.removeNull(transaction.action),
      // this.util.removeNull(transaction.date),
      this.util.removeNull(transaction.trans_selected)
    ]
    return new Promise((resolve, reject) => {
      let updateQuery = "UPDATE transaction_tbl SET trans_selected=? WHERE id='"+transaction.id+"' ";
      this.db.executeSql(updateQuery, transactionData).then((data) => {
        resolve(data);
      },(error) => {
        console.log("DB error_updateTransactionData ", error)
      });
    });
  }

  public fetchTransactionData(){
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM transaction_tbl ORDER BY id DESC";
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

  public insertDepositData(deposit: DepositData){
    return new Promise((resolve, reject) => {
      let depositData = [
        this.util.removeNull(deposit.amount),
        this.util.removeNull(deposit.action),
        this.util.removeNull(deposit.date)
      ]

      let query = "INSERT INTO deposit_tbl (amount, action, date) VALUES (?,?,?)";
      this.db.executeSql(query, depositData).then((data) => {
        resolve(data)
      },(error) => {
        console.log("DB error_insertDepositData ", error)
        reject(error)
      })
    });
  }

  public fetchDepositData(){
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM deposit_tbl";
      this.db.executeSql(query, []).then((data) => {
        let deposit_data: any = []
        for(let i=0; i<data.rows.length; i++){
          deposit_data.push(data.rows.item(i))
        }
        resolve(deposit_data)
      },(error) => {
        console.log("DB error_fetchDepositData ", error)
        reject(error)
      })
    });
  }

  public deleteTransactionData(id: any){
    return new Promise((resolve, reject) => {
      let query = "DELETE FROM transaction_tbl WHERE id = '"+id+"'";
      this.db.executeSql(query, []).then((data) => {
        resolve(data)
      },(error) => {
        console.log("DB error_deleteTransactionData ", error)
        reject(error)
      })
    });
  }

  public deleteDepositData(){
    return new Promise((resolve, reject) => {
      let query = "DELETE FROM deposit_tbl";
      this.db.executeSql(query, []).then((data) => {
        resolve(data)
      },(error) => {
        console.log("DB error_deleteDepositData ", error)
        reject(error)
      })
    });
  }




}
