import * as THREE from "three";

import Sizes from "./utils/Sizes";
import Time from "./utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./world/World";
import Resources from "./utils/Resources";
import sources from './sources'
import Debug from "./utils/Debug";


let instance = null;

export default class Experience {
  constructor(canvas) {

    if (instance) return instance;
    instance = this;


    this.canvas = canvas;


    //setup
    this.debug = new Debug();
    this.sizes = new Sizes(canvas);
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources)
    this.camera = new Camera();
    this.renderer = new Renderer()
    

    //world
    this.world = new World();

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
    this.world.update();
    this.renderer.update();
  }
}
