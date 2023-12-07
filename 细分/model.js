import * as THREE from 'three'

const geometry = new THREE.SphereGeometry(50)
const material = new THREE.MeshLambertMaterial({
    color: 0xffff00,
    wireframe: true,
})
const mesh = new THREE.Mesh(geometry, material);
export default mesh;