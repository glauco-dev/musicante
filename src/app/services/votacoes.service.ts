import { Injectable } from '@angular/core';
import { Votacao } from "../models/votacao.model";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VotacoesService {
  private dbPath = '/votacoes';
  votacoes: Observable<Votacao[]>;
  constructor(private db: AngularFireDatabase) {
    this.votacoes = new Observable<Votacao[]>(observer => {
      db.list(this.dbPath).snapshotChanges().subscribe( snap => {
        observer.next(snap)
      })
    })
  }

  getAll(){
    return this.votacoes
  }

  update(key: string, value: any): Promise<void> {
    return this.db.list(this.dbPath).update(key, value);
  }
}