import { Component, Input } from '@angular/core';
import { Votacao } from 'src/app/models/votacao.model';
import { VotacoesService } from '../../services/votacoes.service';

@Component({
  selector: 'app-votecard',
  templateUrl: './votecard.component.html',
  styleUrls: ['./votecard.component.sass']
})

export class VotecardComponent {
  @Input() data!: Votacao; 
  constructor(private api: VotacoesService) {
  }

  vote(){
    console.log("!vote:", this.data.key,  this.data.votos)
    if(this.data.votos && this.data.key)
      this.api.update(this.data.key, {votos: this.data.votos+1})
      .then((s) => {
        console.log(s)
      })
      .catch(err => console.log(err));
    console.log(this.api)
  }
}
