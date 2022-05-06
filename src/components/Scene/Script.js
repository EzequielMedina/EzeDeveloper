import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Circle } from "./Circles";
import { Fonts, Title } from "./fonts";
import js from '../../img/js.png';
import flutter from '../../img/flutter.png';
import HTML from '../../img/html5.png';
import css3 from '../../img/css3.png';
import C from '../../img/C.png';
import Sql from '../../img/sql.png';
import MongoDb from '../../img/mongodb.png';
import react from '../../img/react.png';
import node from '../../img/nodeJs.png';
import tortoiseSVN from '../../img/tortoiseSVN.png';
import postman from '../../img/postman.png';
//Global variables
let currentRef = null;
var arrayCircles = [];
const floatPoints = [];
//Scene, camera, renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf2f2f2)

const camera = new THREE.PerspectiveCamera(100,
  window.innerWidth / window.innerHeight);

scene.add(camera);
camera.position.set(5, 5, 35);
camera.lookAt(new THREE.Vector3());

const renderer = new THREE.WebGLRenderer();
renderer.setSize(100, 100);

//OrbitControls
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.minDistance = 30;
orbitControls.maxDistance = 100;
//Resize canvas
const resize = () => {
  renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
  camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", resize);

//camera.position.set(-9.2, 7,15,);

const javaScript ={circle:Circle(js, 0, 0, 15.1, 0, 0, 0), font:Fonts("JavaScript", -3, -3, 15.1, 0, 0)}
const flutterDart = {circle:Circle(flutter, 6, 6, 12.5, -0.5, 0.4, 0), font:Fonts("Flutter", 5, 3.5, 14.8, -0.2, 0.5)};
const html5 = {circle:Circle(HTML, 6, 6, -12.5, 0.4, 2.8, 0) ,font:Fonts("HTML", 7, 2.5, -13.5, 50.5, 9)};
const Css3 = {circle:Circle(css3, 14.8, 3, 0, 0, 1.6, 0) ,font:Fonts("Css 3", 14.8, -0.5, 2, 0, 1.6)};
const csharp = {circle:Circle(C, -15, -1, 3, 0, 4.8, 0), font:Fonts("C#", -15, -4, 2, 0, 4.8, 0)}
const sqlServer = {circle:Circle(Sql, -10.5, 2, -10.5, 0.1, 4, 0) ,font:Fonts("Sql server", -8.5, -1, -13, 0.1, 4, 0)};
const mongo = {circle:Circle(MongoDb, -11.5, 7, 7, -0.6, 5.5, -0.4) ,font:Fonts("Mongo Db", -14.5, 3.5, 6, -0.1, 5.5, -0.4)};
const reactJS = {circle:Circle(react, 12, -1.5, -9, 0, 2.3, 0) ,font:Fonts("React JS", 13, -5, -6.5, 0, 2.3, 0)};
const nodeJS = {circle:Circle(node, 12, 0, 9, 0, 0.9, 0) ,font:Fonts("Node JS", 10.5, -3, 10.5, 0, 0.9, 0)};
const tortoise = {circle:Circle(tortoiseSVN, -1, -1, -15, 0, 3.2, 0) ,font:Fonts("TortoiseSVN", 2, -4, -15, 0, 3.2, 0)};
const Postman = {circle:Circle(postman, -9.2, -2, 12, 0, -0.5, 0) ,font:Fonts("Postman", -11.2, -5, 10, 0, -0.5, 0)};
arrayCircles.push(javaScript)
arrayCircles.push(flutterDart)
arrayCircles.push(html5)
arrayCircles.push(Css3)
arrayCircles.push(csharp)
arrayCircles.push(sqlServer)
arrayCircles.push(mongo)
arrayCircles.push(reactJS)
arrayCircles.push(nodeJS)
arrayCircles.push(tortoise)
arrayCircles.push(Postman)
for (let i = 0; i < arrayCircles.length; i++) {
  scene.add(arrayCircles[i].circle)
  scene.add(arrayCircles[i].font)
  
}

/*Circle(flutter, 6, 6, 12.5, -0.5, 0.4, 0)
Circle(HTML, 6, 6, -12.5, 0.4, 2.8, 0)*/
/*scene.add(Circle(js, 0, 0, 15.1, 0, 0, 0));
scene.add(Circle(flutter, 6, 6, 12.5, -0.5, 0.4, 0));
scene.add(Circle(HTML, 6, 6, -12.5, 0.4, 2.8, 0));
scene.add(Circle(css3, 14.8, 3, 0, 0, 1.6, 0));
scene.add(Circle(C, -15, -1, 3, 0, 4.8, 0));
scene.add(Circle(Sql, -10.5, 2, -10.5, 0.1, 4, 0));
scene.add(Circle(MongoDb, -11.5, 7, 7, -0.6, 5.5, -0.4));
scene.add(Circle(react, 12, -1.5, -9, 0, 2.3, 0));
scene.add(Circle(node, 12, 0, 9, 0, 0.9, 0));
scene.add(Circle(tortoiseSVN, -1, -1, -15, 0, 3.2, 0));
scene.add(Circle(postman, -9.2, -2, 12, 0, -0.5, 0));*/
//fonts
/*scene.add(Title())
scene.add(Fonts("JavaScript", -3, -3, 15.1, 0, 0));
scene.add(Fonts("Flutter", 5, 3.5, 14.8, -0.2, 0.5));
scene.add(Fonts("HTML", 7, 2.5, -13.5, 50.5, 9));
scene.add(Fonts("Css 3", 14.8, -0.5, 2, 0, 1.6));
scene.add(Fonts("C#", -15, -4, 2, 0, 4.8, 0));
scene.add(Fonts("Sql server", -8.5, -1, -13, 0.1, 4, 0));
scene.add(Fonts("Mongo Db", -14.5, 3.5, 6, -0.1, 5.5, -0.4));
scene.add(Fonts("React JS", 13, -5, -6.5, 0, 2.3, 0));
scene.add(Fonts("Node JS", 10.5, -3, 10.5, 0, 0.9, 0));
scene.add(Fonts("TortoiseSVN", 2, -4, -15, 0, 3.2, 0))
scene.add(Fonts("Postman", -11.2, -5, 10, 0, -0.5, 0));*/
//cube
const geometry = new THREE.SphereGeometry(15, 32, 16)
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, reflectivity:1 });
const cube = new THREE.Mesh(
  geometry, material
);
scene.add(cube);






//Animate the scene
var j = 0;
const animate = () => {

  orbitControls.update();

  requestAnimationFrame(animate);
  camera.lookAt(cube.position)

  //console.log(camera.position)
  camera.position.x = Math.cos(j) * 30
  camera.position.z = Math.sin(j) * 30
  /*circle.rotation.x += 0.001;
  circle.rotation.y += 0.001;*/
  /*cube.rotation.x += 0.001;
  cube.rotation.y += 0.001;*/
  renderer.render(scene, camera);
  j += 0.01;
};
animate();

//Init and mount the scene
export const initScene = (mountRef) => {
  currentRef = mountRef.current;
  resize();
  currentRef.appendChild(renderer.domElement);
};

//Dismount and clena up the buffer from the scene
export const cleanUpScene = () => {
  scene.dispose();
  currentRef.removeChild(renderer.domElement);
};

export const fetchPoint = () => {

  floatPoints.push({
    position: new THREE.Vector3(-14.39455, 7.2271, 843783),
    element: document.querySelector('.float-point-0')

  })
  console.log(floatPoints.element)
}
