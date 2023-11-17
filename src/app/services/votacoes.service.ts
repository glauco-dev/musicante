import { Injectable } from '@angular/core';
import { Votacao } from "../models/votacao.model";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class VotacoesService {
  private dbPath = '/votacoes';
  votacoes: AngularFireList<Votacao>;
  constructor(private db: AngularFireDatabase) {
    this.votacoes = db.list(this.dbPath);
  }
  // constructor() {
  //   let refAll = ref(database, 'votacoes/');
  //   let unsubscribe = onValue(refAll, snapshot => {
  //     const data = snapshot.val();
  //     console.log("onvalue!!!", data)
  //     this.votacoes = data;
  //   })
  // }

  getAll(){
    return this.votacoes
  }

  // update(key: string, value: any): Promise<void> {
  //   return update(ref(database, 'votacoes/' + key), value);
  // }

  update(key: string, value: any): Promise<void> {
    return this.votacoes.update(key, value);
  }
}