import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import Gsap from 'gsap';
import { Votacao } from './models/votacao.model';
import { VotacoesService } from './services/votacoes.service';
import { canVote, countDownLimit } from './enviroments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements AfterViewInit {
  title = 'musicante';

  votacoes: Votacao[] = []
  countDownDate = countDownLimit.getTime().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  }); 
  days = 0
  hours = 0
  minutes = 0
  seconds = 0
  canVote = true

  constructor(private votacoesServico: VotacoesService){
    this.canVote = canVote()
    var viewCountDownfn = setInterval(() => {
      var now = new Date().getTime();
      let timeleft = now - parseInt(this.countDownDate);
          
      this.hours = -1 * Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = -1 * Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = -1 * Math.floor((timeleft % (1000 * 60)) / 1000);

    }, 1000)
  }
  

  ngOnInit(): void {
    // data handling
    this.votacoesServico.getAll().query.once('value').then(
      (changes) => {
        this.votacoes = changes.val().map((v:Votacao, index:number) =>{
          if(v){
            v.key = index.toString();
            v.Capa = "assets/FOTOS/"+v.Nome?.toUpperCase()+".jpeg";
          }
          console.log(v)
          return (v)
        })
      }
    )
  }
  
  
  ngAfterViewInit(): void {
    var tl = Gsap.timeline()
    tl
      .to('h3.copy', {opacity: 0, duration: 0})
      .to("#backbg", {
        clipPath: "circle(100% at 50% 50%)",
        duration: 0.75,
      }, 0)
      .to("#logo", {
        duration: 0,
        y: -1000
      }, 0)
      .to("#playingIcon", {
        scale: 1.75,
        opacity: 0,
        duration: 1,
        stagger: {
          each: 0.35,
          repeat: 3
        }
      })
      .to("#backbg", { opacity: 0.2, duration: 2 }, 1.5)
      .to("#logo", {
        duration: 2,
        ease: "power4.out",
        y: 0
      }, 3)
      .to(".logo_wrapper", { opacity: 1, duration: 1 }, 3)
      .to("#nav", { opacity: 1, duration: 1 }, 4)
      .to("#playingIcon", { opacity: 0 }, 5)
      .to('h3.copy.left', { opacity: 1, y: 0 ,duration: 2}, 4)
      .to('h3.copy.right', { opacity: 1, y: 0, duration: 2 },5)

  }
}
