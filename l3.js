import * as THREE from 'three';
import { RedFormat } from 'three';
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z=5
const renderer=new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry=new THREE.CircleGeometry(4);
const material=new THREE.MeshBasicMaterial({opacity:15,color: '1AE2A2'});
const circle=new THREE.Mesh(geometry,material);
scene.add(circle);
renderer.render(scene,camera);
