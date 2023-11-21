import { Component, ElementRef, Input } from '@angular/core';
import { Votacao } from 'src/app/models/votacao.model';
import { VotacoesService } from '../../services/votacoes.service';
import { getAnalytics, logEvent } from "firebase/analytics";
import Gsap from 'gsap';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { canVote, countDownLimit } from 'src/app/enviroments/environment';

@Component({
  selector: 'app-votecard',
  templateUrl: './votecard.component.html',
  styleUrls: ['./votecard.component.sass']
})

export class VotecardComponent {
  @Input() data!: Votacao;
  canVote = true;
  constructor(private api: VotacoesService, private notification: NzNotificationService) {
    this.canVote = canVote()
  }

  open(url: string, target:string){
    return window.open(url,target)
  }
  vote(ev:any) {
    if(!canVote) return
    this.notification.blank(
      'Voto registrado!',
      `Música ${this.data.Musica} por ${this.data.Nome}`,
      { nzPlacement: "bottomLeft" }
    );
    const analytics = getAnalytics();
    logEvent(analytics, `${this.data.Nome} recebeu um voto`);
    ev.target.parentElement.classList.add('pump');
    setTimeout(()=>{ev.target.parentElement.classList.remove('pump')}, 500)
    if (this.data.votos != undefined && this.data.key != undefined)
      this.api.update(this.data.key, { votos: this.data.votos + 1 })
        .then((s) => {
          if(this.data.votos)
            this.data.votos += 1
        })
        .catch(err => console.log(err));
    console.log(this.api)
  }

}
