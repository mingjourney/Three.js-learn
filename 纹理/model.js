import * as THREE from 'three'

// const geometry = new THREE.SphereGeometry(50); 
// //纹理贴图加载器TextureLoader
// const texLoader = new THREE.TextureLoader();
// // .load()方法加载图像，返回一个纹理对象Texture
// const texture = texLoader.load('./earth.jpg');
// const material = new THREE.MeshLambertMaterial({
//     // 设置纹理贴图：Texture对象作为材质map属性的属性值
//     map: texture,//map表示材质的颜色贴图属性
// });
// const mesh = new THREE.Mesh(geometry, material)
// const vertices = new Float32Array([
//     0, 0, 0, //顶点1坐标
//     80, 0, 0, //顶点2坐标
//     80, 80, 0, //顶点3坐标
//     0, 80, 0, //顶点4坐标
// ]);
// const indexes = new Uint16Array([
//     // 下面索引值对应顶点位置数据中的顶点坐标
//     0, 1, 2, 0, 2, 3,
// ])
// geometry.index = new THREE.BufferAttribute(indexes, 1); //1个为一组
const geometry = new THREE.CircleGeometry(60, 100);
//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
const texture = texLoader.load('./earth.jpg');
const material = new THREE.MeshBasicMaterial({
    map: texture,//map表示材质的颜色贴图属性
    side:THREE.DoubleSide,
});
const mesh = new THREE.Mesh(geometry, material);
export default mesh;
