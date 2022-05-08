
import * as THREE from "three";

export const Circle = (image, x, y, z ,rx, ry, rz) => {

    
    const texture = new THREE.TextureLoader().load(`${image}`);
    const geometry = new THREE.CircleGeometry(2, 30, 500)
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const circle = new THREE.Mesh(
        geometry, material
    );

    circle.position.x = x;
    circle.position.y = y;
    circle.position.z = z;
    circle.rotateX(rx)
    circle.rotateY(ry)
    circle.rotateZ(rz)
    return circle;
}