import * as THREE from "three";

import Sizes from "./utils/Sizes";
import Time from "./utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";


let instance = null;

export default class Experience {
  constructor(canvas) {

    if (instance) return instance;
    instance = this;


    console.log("Experience module loaded");
    this.canvas = canvas;


    //setup
    this.sizes = new Sizes(canvas);
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer()

    //sizes resize event
    this.sizes.on('resize', ()=>this.resize())

    //time tick event
    this.time.on('tick', ()=>this.update())
  }


  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.renderer.update();
  }
}
