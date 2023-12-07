import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
const loader = new GLTFLoader();
const model = new THREE.Group();
loader.load('./工厂/工厂.gltf', function(gltf){
    console.log('gltf', gltf);
    gltf.scene.traverse(function(obj){
        if(obj.isMesh){
            obj.material = new THREE.MeshLambertMaterial({
                color: 0xffffff
            })
        }
    })
    model.add(gltf.scene);
})
export default model;