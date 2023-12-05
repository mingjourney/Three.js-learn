import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial(
{
    color:0x357e7f,
}
)
const light = new THREE.PointLight(0xffffff,1)
light.decay = 2
light.position.set(100,800,200)
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
const pointLightHelper = new THREE.PointLightHelper(light, 10);
scene.add(pointLightHelper);
light.position.set(100, 60, 50);
const ambient = new THREE.AmbientLight(0xffffff, 3333);
scene.add(ambient);
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
const render = () => {
    mesh.rotateY(0.01);
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
const num = 3000; //控制长方体模型数量
for (let i = 0; i < num; i++) {
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshLambertMaterial({
        color: 0x00ffff
    });
    const mesh = new THREE.Mesh(geometry, material);
    // 随机生成长方体xyz坐标
    const x = (Math.random() - 0.5) * 200
    const y = (Math.random() - 0.5) * 200
    const z = (Math.random() - 0.5) * 200
    mesh.position.set(x, y, z)
    scene.add(mesh); // 模型对象插入场景中
}

// 渲染循环
// const clock = new THREE.Clock();
// function render() {
//     const spt = clock.getDelta()*1000;//毫秒
//     console.log('两帧渲染时间间隔(毫秒)',spt);
//     console.log('帧率FPS',1000/spt);
//     renderer.render(scene, camera); //执行渲染操作
//     mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
//     requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
// }
// render();