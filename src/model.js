/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, Text3D, RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function ModelText(props) {
  const { materials } = useGLTF("/beachScene1.glb");

  const displayName = `Tebid Quinsy Brenda`,
    displayTitle1 = "- Creative Developer",
    displayTitle2 = "- Data Wizard",
    displayTitle3 = "- Adrenaline Junkie";
  return (
    <group
      rotation={[-Math.PI / 2, 0, 0]}
      position-y={0.1}
      position-x={-3.1}
      position-z={-3.1}
      {...props}
      dispose={null}
      scale={0.2}
    >
      <RoundedBox
        castShadow
        receiveShadow
        args={[20, 15, 0.4]}
        radius={0.025}
        smoothness={2}
        roughness={5}
        material={materials["Thatch Material"]}
      >
        <mesh castShadow receiveShadow position={[3, 1, 1.9]} />
      </RoundedBox>
      <group scale={[1, 1, 0.2]} {...props} dispose={null}>
        <Text3D
          font={"/helvetiker_regular.typeface.json"}
          material={materials["Wooden Texture"]}
          scale={1.5}
          bevelEnabled
          bevelSize={0.05}
          position={[-9.6, 3, 0.9]}
        >
          <meshNormalMaterial />
          {displayName}
        </Text3D>
        <Text3D
          font={"/helvetiker_regular.typeface.json"}
          bevelEnabled
          bevelSize={0.05}
          position={[-5, 1.2, 0.9]}
          material={materials["Wooden Texture"]}
        >
          <meshNormalMaterial />
          {displayTitle1}
        </Text3D>
        <Text3D
          font={"/helvetiker_regular.typeface.json"}
          bevelEnabled
          bevelSize={0.05}
          position={[-5, -0.5, 0.9]}
          material={materials["Wooden Texture"]}
        >
          <meshNormalMaterial />
          {displayTitle2}
        </Text3D>
        <Text3D
          font={"/helvetiker_regular.typeface.json"}
          bevelEnabled
          bevelSize={0.05}
          position={[-5, -2.2, 0.9]}
          material={materials["Wooden Texture"]}
        >
          <meshNormalMaterial />
          {displayTitle3}
        </Text3D>
      </group>
    </group>
  );
}

export function JukeBox(onTargetChange, ...props) {
  const { materials, nodes } = useGLTF("/beachScene1.glb");

  return (
    <group {...props} dispose={null}>
      <group
        position={[-3.4, -4.3, -7.4]}
        rotation={[-Math.PI, 1.15, -Math.PI]}
        scale={[1.66, 2.12, 1.63]}
        onClick={(e) => {
          console.log("Clicked Study Sign ...", e);
          onTargetChange("Study");
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials["Wooden Texture"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={materials["Thatch Material"]}
        />
      </group>
    </group>
  );
}

export function Model({ onCameraMove, onTargetChange, ...props }) {
  const { nodes, materials } = useGLTF("/beachScene1.glb");

  const ref = useRef();
  useFrame(() => {
    ref.current.color = "orange" ? "hotpink" : "orange";
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TextBarSign.geometry}
        material={materials.White}
        position={[-0.24, 2.46, 1.52]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.25}
        onClick={(e) => {
          // TODO:: Make the sign Light Up
          console.log("Clicked TextBarSign", e);
          onCameraMove(e.point);
        }}
      />
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextBeach.geometry}
          material={materials.White}
          position={[4.24, 1.89, 3.77]}
          rotation={[Math.PI / 2, 0.11, 0.15]}
          scale={0.41}
          cursor="pointer"
        >
          <mesh
            rotation-x={Math.PI * -0.5}
            position-x={1}
            position-y={0.02}
            visible={false}
            onClick={(e) => {
              console.log("Clicked Beach Sign ...", e);
              onTargetChange("Buggy");
            }}
          >
            <planeGeometry attach="geometry" args={[2.6, 1.0]} />
            <meshNormalMaterial />
          </mesh>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextBar.geometry}
          material={materials.White}
          position={[4.44, 1, 3.78]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.4}
        >
          <mesh
            rotation-x={Math.PI * -0.5}
            position-x={1}
            position-y={0.02}
            visible={false}
            onClick={(e) => {
              console.log("Clicked Bar Sign ...", e);
              onTargetChange("Bar");
            }}
          >
            <planeGeometry attach="geometry" args={[3, 1.2]} />
            <meshNormalMaterial />
          </mesh>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextStudy.geometry}
          material={materials.White}
          position={[4.37, 1.43, 3.82]}
          rotation={[Math.PI / 2, 0.14, 0]}
          scale={0.32}
        >
          <mesh
            rotation-x={Math.PI * -0.5}
            position-x={1.3}
            position-y={0.02}
            visible={false}
            onClick={(e) => {
              console.log("Clicked Study Sign ...", e);
              onTargetChange("Study");
            }}
          >
            <planeGeometry attach="geometry" args={[3.3, 1.2]} />
            <meshNormalMaterial />
          </mesh>
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        ref={ref}
        geometry={nodes.Lights.geometry}
        bloom={{ threshold: 20, intensity: 200 }} // bloom effect
        position={[-1.94, 2.61, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Sand Material"]}
        position={[6.29, 1.62, 2.42]}
        rotation={[1.38, -0.28, 2.65]}
        scale={[0.23, 0.33, -0.01]}
      />
      <RoundedBox radius={.5} smoothness={2} roughness={5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor.geometry}
          material={materials["Sand Material"]}
          position={[1.91, 0, 1.26]}
          scale={[10, -0.002, 8.2]}
          onClick={(e) => {
            console.log("Clicked Floor ...", e);
            onTargetChange("Floor");
          }}
        />
      </RoundedBox>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cup_Normal.geometry}
        material={materials["Glass Material"]}
        position={[2.53, 1.2, 0.29]}
        rotation={[0, 0.17, 0]}
        scale={0.07}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cup_Cava.geometry}
        material={materials["Glass Material"]}
        position={[0.82, 1.31, 1.29]}
        scale={[0.19, 0.07, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cup_Wine.geometry}
        material={materials["Glass Material"]}
        position={[-0.76, 1.49, -1.01]}
        rotation={[0, 0.36, 0]}
        scale={0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottles.geometry}
        material={materials["Glass Material"]}
        position={[0, 0, -0.04]}
        scale={[0.71, 0.6, 0.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BarStools.geometry}
        material={materials["Wooden Texture"]}
        position={[1.39, 0.65, 1.86]}
        rotation={[0, -0.09, Math.PI]}
        scale={[0.3, 0.48, 0.3]}
      />
      <group position={[0, 2.48, 0]} scale={[1, 0.06, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["Wooden Texture"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials["Thatch Material"]}
        />
      </group>
      <group
        position={[5.11, 3.44, 2.66]}
        rotation={[Math.PI / 2, -0.48, 0]}
        scale={[3.78, 0.84, 0.06]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Thatch Material"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials["Green Material"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sign.geometry}
        material={materials["Thatch Material"]}
        position={[4.47, 1.2, 3.67]}
        rotation={[0, -0.23, 0]}
        scale={[0.11, 3.9, 0.12]}
      />
    </group>
  );
}

useGLTF.preload("/beachScene1.glb");
