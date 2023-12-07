import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import model from './model.js'
const scene = new THREE.Scene();

const light = new THREE.PointLight(0xffffff,0.5)
light.decay = 1
light.position.set(100,800,200)
scene.add(light)
scene.add(model)
const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
const width = window.innerWidth;
const height = window.innerHeight;

//相机
//设置相机四个参数
const camera = new THREE.PerspectiveCamera(30, width/height,1,1000  );
camera.position.set(-131,109,-134);
camera.lookAt(0,0,0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.render(scene, camera);
// renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);
const pointLightHelper = new THREE.PointLightHelper(light, 10);
scene.add(pointLightHelper);

const controls = new OrbitControls(camera, renderer.domElement );
controls.addEventListener('change', function () {
    renderer.render(scene, camera); //执行渲染操作
});//监听鼠标、键盘事件
const render = () => {
    renderer.render(scene, camera); //执行渲染操作
    requestAnimationFrame(render);
}
render();

window.onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    //更新相机投影矩阵
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
