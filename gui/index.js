import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import GUI from 'three/addons/libs/lil-gui.module.min.js';

const scene = new THREE.Scene();
const geometry = new THREE.SphereGeometry(50);
const material = new THREE.MeshPhongMaterial({
    color: 0xfffff,
    shininess: 20, //高光部分的亮度，默认30
});const light = new THREE.DirectionalLight(0xffffff,1)
light.decay = 2
light.position.set(500,800,600)
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
const camera = new THREE.PerspectiveCamera(30, width/height,1,1000  );
camera.position.set(500,500,200);
camera.lookAt(0,0,0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);

// 改变点光源位置，使用OrbitControls辅助观察
// light.position.set(-400, 200, -300);
const controls = new OrbitControls(camera, renderer.domElement );
controls.addEventListener('change', function () {
    renderer.render(scene, camera); //执行渲染操作
});//监听鼠标、键盘事件
controls.addEventListener('change', function () {
    // 浏览器控制台查看相机位置变化
    console.log('camera.position',camera.position);
});
const stats = new Stats();
document.body.appendChild(stats.domElement);


window.onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    //更新相机投影矩阵
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
const obj1 = {
    bool: false
}
const obj = {
    color: 0x00ffff,
    specular: 0x111111,
}
const gui = new GUI()
gui.add(obj1, 'bool').name('是否旋转');
const render = () => {
    if(obj.bool){
        mesh.rotateY(0.01);
    }
    stats.update();
    renderer.render(scene, camera); //执行渲染操作
    requestAnimationFrame(render);
}
render();
const matFolder = gui.addFolder('材质');
matFolder.addColor(obj,'color').onChange((value)=>{
    material.color.set(value);
})
matFolder.add(obj, )
const ambientFolder = gui.addFolder('环境光');
const dirFolder = gui.addFolder('平行光');
gui.add(light,'intensity', 0, 3)
gui.add(light.position,'x', -400, 400)
gui.add(light.position,'y', -400, 400)
gui.add(light.position,'z', -400, 400)
