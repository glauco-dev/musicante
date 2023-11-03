import { AfterViewInit, Component } from '@angular/core';
import Gsap from 'gsap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements AfterViewInit {
  title = 'musicante';

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

    const commonAnimProps = {
      scale: 1.2,
      opacity: 0,
      duration: 2,
      stagger: {
        each: 1,
        repeat: -1,
      }
    };

    const particlesAnimations = [
      {
        ...commonAnimProps,
        scale: 1.2,
        y: -10,
        rotate: -15,
        x: -10,
      },
      {
        // ...commonAnimProps
      },
      {...commonAnimProps},
      {...commonAnimProps},
      {
        ...commonAnimProps,
        // scale: 1.2,
        // rotateX: 0,
        // rotateY:180,
        // rotateZ: 60,
        // translate:40,
        // translateY:-40,
        // translateX:-20,
        // y: -16,
        // x: 15,
        rotate: 20
      },
      {
        // ...commonAnimProps,
        // scale: 1.2,
        // y: -16,
        // x: 15,
        // rotate: 20
      },
      {
        ...commonAnimProps,
        scale: 1.2,
        y: -21,
        x: 33,
        rotate: 13
      }
    ]

    // particlesAnimations.forEach((anim, i) => {
    //   tl.to(lgptcls[i], anim, 5)
    // })
  }
}
