import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import GUI from 'three/addons/libs/lil-gui.module.min.js';

const scene = new THREE.Scene();
// const geometry = new THREE.BoxGeometry(100, 100, 100);
// const geometry = new THREE.SphereGeometry(50);
// const geometry = new THREE.CylinderGeometry(30, 20, 50);
const geometry = new THREE.PlaneGeometry(110, 20);
const material = new THREE.MeshLambertMaterial({color:0x357e7f,side:THREE.DoubleSide})
const nums = 50;
for(let i = 0; i < nums; i++){
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0,0,200*i);
    for(let j = 0; j < nums; j++){
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(200 * i,0,200 * j);
        scene.add(mesh);
    
    }
}
const light = new THREE.PointLight(0xffffff,2)
light.decay = 1
light.position.set(-300,800,300)
scene.add(light)
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0,0,-10);
scene.add(mesh);
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
const width = window.innerWidth;
const height = window.innerHeight;

//相机
//设置相机四个参数
const camera = new THREE.PerspectiveCamera(50, width/height,1,20000  );
camera.position.set(2000, 2000, 2000);
// 改变相机观察目标点
camera.lookAt(1000, 0, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
const pointLightHelper = new THREE.PointLightHelper(light, 10);
scene.add(pointLightHelper);
// const ambient = new THREE.AmbientLight(0xffffff, 0.33);
// scene.add(ambient);
// 改变点光源位置，使用OrbitControls辅助观察
// light.position.set(-400, 200, -300);
const controls = new OrbitControls(camera, renderer.domElement );
controls.addEventListener('change', function () {
    renderer.render(scene, camera); //执行渲染操作
});//监听鼠标、键盘事件
controls.target.set(1000, 0, 1000);

controls.addEventListener('change', function () {
    // 浏览器控制台查看相机位置变化
    console.log('camera.position',camera.position);
});
controls.update();
const stats = new Stats();
document.body.appendChild(stats.domElement);
const render = () => {
    // mesh.rotateY(0.01);
    stats.update();
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
const gui = new GUI()
gui.add(mesh.position, 'x', 0, 1000)
gui.add(mesh.position, 'y', 0, 1000)
gui.add(mesh.position, 'z', 0, 1000)