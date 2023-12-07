import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import model from './model.js'
const scene = new THREE.Scene();

const light = new THREE.PointLight(0xffffff,1)
light.decay = 2
light.position.set(100,800,2000)
scene.add(light)
scene.add(model)
const ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
const width = window.innerWidth;
const height = window.innerHeight;

//相机
//设置相机四个参数
const camera = new THREE.PerspectiveCamera(40, width/height,10,100000  );
camera.position.set(500,500,200);
camera.lookAt(0,0,0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.render(scene, camera);
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
