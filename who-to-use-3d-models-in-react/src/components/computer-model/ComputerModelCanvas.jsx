import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import ComputerModel from "./ComputerModel"
import { Html } from "@react-three/drei"
 
const ComputerModelCanvas = () => {
  return (
    <Canvas>
        <Suspense fallback={<Html><span>Loading 3D model ...</span></Html>}>
            <Stage environment={'night'} intensity={0.5}> {/* with Stage it prevent very tiny small default size */}
                <ComputerModel/>
            </Stage>

            <OrbitControls enableZoom={false} autoRotate/>
            <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault />
        </Suspense>
    </Canvas>
  )
}

export default ComputerModelCanvas