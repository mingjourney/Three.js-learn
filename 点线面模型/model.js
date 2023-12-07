import * as THREE from 'three'

const geometry = new THREE.BufferGeometry(); 
const vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    50, 0, 0, //顶点2坐标
    0, 100, 0, //顶点3坐标
    0,  0, 10,//顶点4坐标
    0, 0, 100, //顶点5坐标
    50, 0, 10, //顶点6坐标
]);
const attribue = new THREE.BufferAttribute(vertices, 3); 
geometry.attributes.position = attribue;
const material = new THREE.PointsMaterial({
    color: 0xffff00,
    size: 10.0 //点对象像素尺寸
}); 
const points = new THREE.Points(geometry, material); //点模型对象

const material1 = new THREE.LineBasicMaterial({
    color: 0xffff00,
})
const material2 = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side:THREE.DoubleSide
})
const mesh = new THREE.Mesh(geometry, material2)
const lines = new THREE.LineLoop(geometry, material1);
export default mesh;