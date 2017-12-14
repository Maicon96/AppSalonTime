import { Injectable } from '@angular/core';
import  {DatabaseProvider} from "../database/database";
import  {SQLiteObject} from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginProvider {

  constructor(private dbProvider: DatabaseProvider) {

  }

  public insert(login: LoginCRUD){
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) =>{
        let sql = 'insert into login (nome, telefone, usuario, senha) values (?, ?, ?, ?)';
        let data = [login.nome, login.telefone, login.usuario, login.senha];

        return db.executeSql(sql,data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getLogin(login: string, senha: string){
   return this.dbProvider.getDB()
     .then((db: SQLiteObject) => {
       let sql = 'select usuario from login where usuario = ? AND senha = ?';
       let data = [login, senha];

       return db.executeSql(sql, data)
         .then((data: any) => {
           if (data.rows.length > 0){
             let item = data.rows.item(0);
             return 1;
           }else{
             return null
           }

         })
         .catch((e) => console.error(e));
    })
  }

}

export class LoginCRUD {

  id: number;
  nome: string;
  telefone: string;
  usuario: string;
  senha: string;

}

