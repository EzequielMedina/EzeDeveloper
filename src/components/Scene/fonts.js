import typeFont from '../../font/Uchrony_Bold.json'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import * as THREE from "three";

export const Fonts = (text, x, y, z, rx, ry) => {
    const loader = new FontLoader()
    const font = loader.parse(typeFont)

    const textgeometry = new TextGeometry(`${text}`, {
        font: font,
        size: 1,
        height: 0.2,
        material:0,
        bevelThickness: 1,
        extrudeMaterial: 3,
        curveSegments: 10,
    })
    const textMaterial = new THREE.MeshLambertMaterial(
        { color: 0xff0000 }
    );


    var mesh = new THREE.Mesh(textgeometry, textMaterial);

    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
    mesh.rotateX(rx);
    mesh.rotateY(ry)


    return mesh
}
export const Title = ()=>{
    const loader = new FontLoader()
    const font = loader.parse(typeFont)

    const textgeometry = new TextGeometry("SKILL", {
        font: font,
        size: 2,
        height: 0.2,
        material:0,
        bevelThickness: 1,
        extrudeMaterial: 3,
        curveSegments: 10,
    })
    const textMaterial = new THREE.MeshLambertMaterial(
        { color: 0xff0000 }
    );


    var mesh = new THREE.Mesh(textgeometry, textMaterial);

    mesh.position.x = 0;
    mesh.position.y = 12;
    mesh.position.z = 0;



    return mesh


}