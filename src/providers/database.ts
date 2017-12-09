import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';
import { Util } from '../providers/util';

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
    this.db.executeSql('CREATE TABLE IF NOT EXISTS transaction(id INTEGER PRIMARY KEY AUTOINCREMENT, rate REAL, amount REAL, quantity REAL, action TEXT, date NUMERIC)', {})
    this.db.executeSql('CREATE TABLE IF NOT EXISTS deposit(id INTEGER PRIMARY KEY AUTOINCREMENT, amount REAL, date NUMERIC)', {})
  }

  public insertTransactionData(){

  }

}
