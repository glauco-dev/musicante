import { Injectable } from '@angular/core';
import { Votacao } from "../models/votacao.model";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VotacoesService {
  votacoes: AngularFireList<Votacao>; 
  private dbPath = '/votacoes';
  constructor(private db: AngularFireDatabase) {
    this.votacoes = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Votacao> {
    return this.votacoes;
  }

  update(key: string, value: any): Promise<void> {
    console.log(key,value)
    return this.db.list(this.dbPath).update(key, value)
  }
}