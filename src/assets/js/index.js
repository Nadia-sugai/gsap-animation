import "../../assets/scss/app.scss";
import mvAnim from "./utils/gsap-timeline";
import scrollTriggerAnim from "./utils/gsap-scrolltrigger";

class Main {
  constructor(){
    this.initModules();
  }
  initModules(){
    new mvAnim();
    new scrollTriggerAnim();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new Main();
})