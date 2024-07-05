import "../../assets/scss/app.scss";
import Anim from "./utils/example";

class Main {
  constructor(){
    this.initModules();
  }
  initModules(){
    new Anim();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new Main();
})