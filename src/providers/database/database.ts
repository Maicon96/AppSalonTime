import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {

  }

  public getDB(){
    return this.sqlite.create({
      name: 'salonTime.db',
      location: 'default'
    });
  }
  public createDataBase(){

    return this.getDB()
      .then((db: SQLiteObject) => {
        this.createTables(db);
      })
      .catch(e => console.error(e));

  }

  public createTables(db: SQLiteObject){
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS login (in integer primary key AUTOINCREMENT NOT NULL, nome TEXT, telefone TEXT, usuario TEXT, senha TEXT)'],
    ])
      .then(() => console.log('Tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
  }

  // private insertDefault(db: SQLiteObject){
  //     db.executeSql('select nome from login',{})
  //       .then(data: any) =>{
  //
  //   }
  // }

}
