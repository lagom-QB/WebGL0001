import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  Html,
  useProgress,
  OrbitControls,
  Environment,
  Stars,
  Sky,
} from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { Model, ModelText, JukeBox } from "./model";
import { MovingTruck } from "./modelTruck";
import * as THREE from "three";
import React from "react";

/**
 * WEBGL - Final
 * -- T0DO --
 * User can click on the beach and the camera will move to the position ❌
 * User can rotate but not zoom  ✅
 * User can click on the beach Menu to visit targeted areas:
 * - Beach --> Buggy  ✅
 * - Bar --> Bar  ✅
 * - Study --> JukeBox  ✅
 * -- Notice --
 * I don't add sparkles because I have stars
 * Cameras are tricky
 */

function Loader() {
  const { progress } = useProgress();

  return <Html center>{progress} % loaded</Html>;
}

function PointLight() {
  const light = useRef();
  // useHelper(light, THREE.PointLightHelper);
  useFrame(({ clock }) => {
    light.current.position.x = Math.sin(clock.getElapsedTime() * 2) * 10;
    light.current.position.z = Math.cos(clock.getElapsedTime() * 2) * 10;
  });
  return (
    <>
      <spotLight
        castShadow
        ref={light}
        angle={0.5}
        position={[-3, 7, 0]}
        intensity={0.4}
        color="#0ff3e0"
        distance={20}
        blur={0.5}
      />
    </>
  );
}

function Looker({ cameraPosition, lookAtPoint }) {
  const { camera, controls } = useThree();
  camera.rotation.y = -Math.PI / 4;

  useEffect(() => {
    // console.log("Looker", lookAtPoint);
    camera.position.x = cameraPosition[0];
    camera.position.z = cameraPosition[2];
    camera.updateProjectionMatrix(); ///  important
    if (controls) {
      controls.update();
    }
  }, [cameraPosition, camera, controls, lookAtPoint]);

  return (
    <OrbitControls
      makeDefault
      enableZoom={true}
      enablePan={false}
      enableRotate={true}
      target={lookAtPoint}
    />
  );
}

export default function App() {
  const [cameraPosition, setCameraPosition] = useState([0, 10, 0]),
    [target, setTarget] = useState(new THREE.Vector3(0, 0, 0)),
    [lookAtPoint, setLookAtPoint] = useState(),
    beachSphere = useRef(),
    barSphere = useRef(),
    studySphere = useRef(),
    initPosition = new THREE.Vector3(0, 10, 0);

  useEffect(() => {
    // console.log("This is in the useEffect ...", target, studySphere.current);
    setLookAtPoint([target.x, target.y, target.z]);
  }, [target]);

  return (
    <Canvas
      className="canvas"
      camera={{
        position: [-10, 5, -10],
        rotation: [-Math.PI / 2, 0, 0],
      }}
    >
      <Looker
        cameraPosition={cameraPosition}
        target={target}
        lookAtPoint={lookAtPoint}
      />
      <Suspense fallback={<Loader />}>
        <Sky
          turbidity={0}
          rayleigh={0.0}
          sunPosition={[-10, 1, 0]}
          inclination={0.7}
          elevation={2}
          azimuth={[-Infinity, Infinity]}
          exposure={0.05}
          distance={3000}
        />
        <Stars />
        <>
          <group>
            <mesh visible={false} ref={beachSphere} position={[-90, -20, -55]}>
              <sphereGeometry scale={0.6} />
            </mesh>
            <mesh visible={false} ref={barSphere} position={[-100, -30, -85]}>
              <sphereGeometry scale={0.6} />
            </mesh>
            <mesh visible={false} ref={studySphere} position={[-39, -40, -75]}>
              <sphereGeometry scale={0.6} />
            </mesh>
          </group>
        </>
        {/* <fog color="#131862" near={10} far={20} attach="fog" opacity={0.02} /> */}
        <PointLight scale={10} />
        <group scale={10}>
          <Model
            scale={1}
            position={[-10, -5, -10]}
            onCameraMove={(pos) => {
              setCameraPosition([pos.x, 20, pos.z]);
            }}
            onTargetChange={(t) => {
              console.log("new target " + t, "at", barSphere.current.position);
              if (t === "Buggy") {
                setCameraPosition([
                  beachSphere.current.position.x,
                  -20,
                  beachSphere.current.position.z,
                ]);
                setLookAtPoint([
                  beachSphere.current.position.x,
                  -20,
                  beachSphere.current.position.z,
                ]);
              } else if (t === "Floor") {
                console.log("You clicked on the floor, Going back");
                setCameraPosition([0, -40, 0]);
                setLookAtPoint([0, -40, 0]);
              } else if (t === "Study") {
                setCameraPosition([
                  studySphere.current.position.x,
                  -40,
                  studySphere.current.position.z,
                ]);
                setLookAtPoint([
                  studySphere.current.position.x,
                  -40,
                  studySphere.current.position.z,
                ]);
              } else {
                setCameraPosition([
                  barSphere.current.position.x,
                  -25,
                  barSphere.current.position.z,
                ]);
                setLookAtPoint([
                  barSphere.current.position.x,
                  -25,
                  barSphere.current.position.z,
                ]);
              }
            }}
          />
          <JukeBox
            scale={1}
            onTargetChange={(t) => {
              console.log(
                "new target " + t,
                "at",
                studySphere.current.position
              );
              if (t === "Buggy") {
                setCameraPosition([
                  beachSphere.current.position.x,
                  -20,
                  beachSphere.current.position.z,
                ]);
                setLookAtPoint([
                  beachSphere.current.position.x,
                  -20,
                  beachSphere.current.position.z,
                ]);
              } else if (t === "Floor") {
                console.log("You clicked on the floor, Going back");
                setCameraPosition([0, -40, 0]);
                setLookAtPoint([0, -40, 0]);
              } else if (t === "Study") {
                setCameraPosition([
                  studySphere.current.position.x,
                  -40,
                  studySphere.current.position.z,
                ]);
                setLookAtPoint([
                  studySphere.current.position.x,
                  -40,
                  studySphere.current.position.z,
                ]);
              } else {
                setCameraPosition([
                  barSphere.current.position.x,
                  -25,
                  barSphere.current.position.z,
                ]);
                setLookAtPoint([
                  barSphere.current.position.x,
                  -25,
                  barSphere.current.position.z,
                ]);
              }
            }}
          />
          <ModelText position-y={-5} />
          <MovingTruck
            position-y={-5}
            onTargetChange={(t) => {
              console.log(
                "new target " + t,
                "at",
                beachSphere.current.position,
                "from",
                cameraPosition
              );
              if (t === "Buggy") {
                setCameraPosition([
                  beachSphere.current.position.x,
                  -20,
                  beachSphere.current.position.z,
                ]);
                setLookAtPoint([
                  beachSphere.current.position.x,
                  -20,
                  beachSphere.current.position.z,
                ]);
              } else if (t === "Floor") {
                console.log("You clicked on the floor, Going back");
                setCameraPosition([0, -40, 0]);
                setLookAtPoint([0, -40, 0]);
              } else if (t === "Study") {
                setCameraPosition([
                  studySphere.current.position.x,
                  -40,
                  studySphere.current.position.z,
                ]);
                setLookAtPoint([
                  studySphere.current.position.x,
                  -40,
                  studySphere.current.position.z,
                ]);
              } else {
                setCameraPosition([
                  barSphere.current.position.x,
                  -25,
                  barSphere.current.position.z,
                ]);
                setLookAtPoint([
                  barSphere.current.position.x,
                  -25,
                  barSphere.current.position.z,
                ]);
              }
            }}
          />
        </group>
        <Environment frames={Infinity} files="/moonless_golf_1k.hdr" />
      </Suspense>
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </Canvas>
  );
}

/*
 * ==================================================
 * --- Basic Features (required to pass) ---
 * Load a glTF (*.gltf or *.glb model) ✅
 * Optimize model and describe in a README or other text what steps you took to optimize it, or why you didn't have to. (Remember that visual quality is also important, not just making it as small as possible)
 ** ---> To optimize the model, I took out some of the detailling on the model, mage all the image assets to jpeg and did a compression while exporting. I did not try to reduce the number of vertices because you said it wont matter overall. <--- ✅
 * Light the scene using an HDRI ✅
 * Add at least one interaction with an item in the scene which triggers a change of style or animation. Changing styles like color should preferably be animated too.
 * Add one mesh with a PBR texture material applied to it. One suggestion is to add a ground plane, but you are free to chose. ✅
 * Add one light that casts a shadow in the scene. Meshes should be marked with `castShadow` and `receiveShadow` for this to work. ✅
 * --- Advanced features (optional for higher points) ---
 * Add fog to your scene to blur the mix between your scene and the canvas background
 * Add one simple 3D model that you created from scratch in Blender. ✅
 * Add one ContactShadow underneath the main 3D model ✅
 * Add one or more post processing effects
 * Add a mouse parallax of the Camera position, i.e. moving the mouse across the scene should also move the camera slightly.
 * Performance. You should optimize download size for the entire experience and make compromises to improve the render performance. 3D experinces can be larger than your normal website, but we should still be mindful of the total size and make sure we can hit 60fps on an iPhone or similar.
 * Find a way to incorporate other cool components from the Drei (https://github.com/pmndrs/drei) library. But be careful not to exceed the performance budget. Too many cool features or effects might be costly to render.
 * ===================================================
 */
