import * as THREE from "three";
import {  OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from "./Experience";


export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.canvas = this.experience.canvas;
    this.scene = this.experience.scene;
    this.setInstance();
    this.setOrbitControls();

    console.log(this)
  }

  setInstance(){
    this.instance = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 100);
    this.instance.position.set(6, 4, 8);
    this.scene.add(this.instance);
  }


  setOrbitControls(){
    this.orbitControls = new OrbitControls(this.instance, this.canvas);
    this.orbitControls.enableDamping = true;
  }


  resize(){
    this.instance.aspect = this.sizes.aspect;
    this.instance.updateProjectionMatrix();
  }

  update(){
    this.orbitControls.update();
  }
}