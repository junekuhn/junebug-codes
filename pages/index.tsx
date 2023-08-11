import { Canvas } from "@react-three/fiber"
import IndexThree from "../components/three/IndexThree"


 const Index = (props) => {

    return <>
        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [ -3, 1.5, 4 ]
            } }
        >
            <IndexThree />
        </Canvas>
    </>
}

export default Index;