import * as THREE from './js/three.js';
import * as THREEx from 'https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js'

function main() {
    const canvas = document.getElementById('canvas1');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 10000);
    const renderer = new THREE.WebGLRenderer({canvas: canvas});

    const arjs = new THREEx.LocationBased(scene, camera);
    const cam = new THREEx.WebcamRenderer(renderer);

    const geom = new THREE.BoxGeometry(20000000, 20000000, 20000000);
    const mtl = new THREE.MeshBasicMaterial({color: 0xff0000});
    const box = new THREE.Mesh(geom, mtl);
    arjs.add(box, 91.79979070874991, 26.138521970305003); 
     box.position.y=30;
  

    arjs.fakeGps(91.79979070874991, 26.138521970305003);

    requestAnimationFrame(render);

    function render() {
        if(canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
            renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
            const aspect = canvas.clientWidth/canvas.clientHeight;
            camera.aspect = aspect;
            camera.updateProjectionMatrix();
        }
        cam.update();
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
}

main();