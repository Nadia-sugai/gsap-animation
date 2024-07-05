"use strict";
import { gsap } from "gsap";


class Anim {
  constructor(){
    this.tl = gsap.timeline({
      duration: 2,
    });
  this.bundle();
  }
  FadeIn() {
    this.tl.from(".mv-txt__item",
      {
        y: 50,
        duration: 0.5,
        opacity: 0,
        ease: "power1.out",
        stagger: 0.1,
      }
    )
    this.tl.to(".mv-txt__item",
      {
        duration: 0.5,
        color: "#0ae447",
        stagger: 0.1,
      }
    )
    this.tl.to(".mv-txt__item",
      {
        y: 100,
        duration: 0.5,
        opacity: 0,
        stagger:{
          amount: 1,
          ease: "power1.in",
          from: "end" //どこからアニメーションさせるか
        },
      }
    )
    this.tl.from(".mv-scroll__down",
      {
        duration: 2,
        delay: 0.5,
        yPercent: -1000,
        ease: "bounce.out",
      }
    )
    this.tl.to(".mv-scroll__down",
      {
        duration: 1,
        opacity: 0,
        repeat: -1,//無限に繰り返す
        yoyo: true,//アニメーションが完了したら逆再生
      }
    )
  }

  bundle(){
    this.FadeIn();
  }

}

export default Anim;