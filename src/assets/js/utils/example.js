"use strict";

class Anim {
  constructor(){
  this.test = "hoge"
  this.bundle();
  }
  method() {
    console.log(this.test);
  }

  bundle(){
    this.method();
  }

}

export default Anim;