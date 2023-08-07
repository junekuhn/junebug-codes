import { PivotControls, OrbitControls, Text3D, TransformControls, Html, Text, Float, MeshReflectorMaterial, Center, useMatcapTexture } from "@react-three/drei"
import { useRef } from "react"


export default function Experience()
{
    const cubeRef = useRef();
    const [matcapTexture] = useMatcapTexture('2E763A_78A0B7_B3D1CF_14F209', 256)


    return <>

        <OrbitControls makeDefault />


        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.9 } />
        <Center>
            <Text3D font="./font/Dirtyline.json"
                size={ 0.5 }
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelSize={ 0.02}
                bevelOffset={0}
                bevelSegments={5}
                >
                junebug codes
                <meshMatcapMaterial matcap={matcapTexture}/>
            </Text3D>
        </Center>
        



    </>
}