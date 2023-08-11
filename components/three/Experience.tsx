"use client"

import { PivotControls, OrbitControls, TransformControls, Html, Text, Float, MeshReflectorMaterial, Center, useMatcapTexture, Text3D } from "@react-three/drei"
import { AmbientLightProbeProps, AmbientLightProps } from "@react-three/fiber";
import { useRef } from "react"
import { DoubleSide } from 'three'



export default function Experience()
{
    const cubeRef = useRef();
    const [matcapTexture] = useMatcapTexture('2E763A_78A0B7_B3D1CF_14F209', 256)


    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.9 } />
        <Center top>
            <Text3D font="./font/Dirtyline.json"
                size={ 0.5 }
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelSize={ 0.02}
                bevelOffset={0}
                bevelSegments={5}
                letterSpacing={0.13}
                >
                jUneBuG
                <meshMatcapMaterial matcap={matcapTexture} side={DoubleSide}/>
            </Text3D>
            <Text3D font="./font/Dirtyline.json"
                size={ 0.8 }
                height={0.3}
                curveSegments={12}
                bevelEnabled
                bevelSize={ 0.02}
                bevelOffset={0}
                bevelSegments={5}
                position={ [0, -1.2, 0]}
                letterSpacing={0.1}
                >
                CoDeS
                <meshMatcapMaterial matcap={matcapTexture} side={DoubleSide}/>
            </Text3D>
        </Center>
        



    </>
}