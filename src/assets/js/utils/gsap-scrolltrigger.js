"use strict";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class scrollTriggerAnim {
  constructor(){
    gsap.registerPlugin(ScrollTrigger);//gsapにscrollTriggerを使えるように
    this.elements = document.querySelectorAll(".overlap-layout__item");
    this.tl = gsap.timeline();
    ScrollTrigger.create({
      animation: this.tl,
      trigger: ".overlap-layout",
      start: "top top",
      end: "+=" + this.elements.length * this.elements[0].offsetHeight * "2",//重ねる要素の高さの総量
      pin: true,//要素を固定
      scrub: true,//スクロール量によってアニメーションを変化
      markers: true,
      anticipatePin: 1,//素早くスクロールした時にピン留めが遅れる現象の防止
    })
    this.bundle();
  }
  FadeIn() {
    gsap.from(".js-anim-fadeIn", {
      scrollTrigger: {
        trigger: ".main-content",
        start: "top bottom",
        end: "bottom center",
      },
      duration: 2,
      opacity: 0,
      y: 100,
      stagger: 0.1,//同じ要素を何秒遅らせて再生させるか
    })
  }
  pin(){
    this.tl.from(".is-first", {
      duration: 0.5,
      opacity: 0,
    })

    this.tl.add(() => {}, "+=1");

    this.tl.from(".is-second", {
      opacity: 0,
      yPercent: 100,
    })

    this.tl.add(() => {}, "+=1");

    this.tl.from(".is-third", {
      opacity: 0,
      yPercent: 100,
    })
  }

  bundle(){
    this.FadeIn();
    this.pin();
  }

}

export default scrollTriggerAnim;