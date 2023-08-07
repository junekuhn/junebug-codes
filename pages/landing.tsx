import { Canvas } from "@react-three/fiber";
import Experience from "../components/three/Experience";


const LandingPage = (props) => {

    return (
        <div className="h-[100vh]">
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [ - 4, 3, 6 ]
                }}
                >
                <Experience />
            </Canvas>
        </div>

    )
}

export default LandingPage;