"use strict";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class scrollTriggerAnim {
  constructor(){
    gsap.registerPlugin(ScrollTrigger);
    this.tl = gsap.timeline();
    this.bundle();
  }
  FadeIn() {
    gsap.from(".js-anim-fadeIn", {
      scrollTrigger: {
        trigger: ".main-content",
        start: "top center",
        end: "bottom center",
        markers: true,
      },
      duration: 2,
      opacity: 0,
      y: 100,
      stagger: 0.1,
    })
  }
  // pin(){
  //   this.tl.from("",{
      
  //   })
  // }

  bundle(){
    this.FadeIn();
    // this.pin();
  }

}

export default scrollTriggerAnim;