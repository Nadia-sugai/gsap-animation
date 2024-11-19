"use strict";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

class scrollTriggerAnim {
  constructor(){
    gsap.registerPlugin(ScrollTrigger);//gsapにscrollTriggerを使えるように
    this.targets = gsap.utils.toArray(".overlap-layout__item");//同クラス名の要素を配列に
    this.tl = gsap.timeline();
    ScrollTrigger.create({
      animation: this.tl,
      trigger: ".overlap-layout",
      start: "top top",
      end: "+=" + this.targets.length * this.targets[0].offsetHeight * "2",//重ねる要素の高さの総量
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
    this.targets.forEach((target) =>{
      this.tl.from(target, {
        opacity: 0,
        yPercent: 100,  
      })
      this.tl.add(() => {}, "+=1");
    })
  }
  // snap(){
    
  // }

  bundle(){
    this.FadeIn();
    this.pin();
  }

}

export default scrollTriggerAnim;