import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Cardiologist from "../Pages/Cardiac";
import Mediciene from "../Pages/Mediciene";
import Bone from "../Pages/Bone";





export default function Router(){

    return(
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Cardiologist" element={<Cardiologist/>}></Route>
        <Route path="/Mediciene" element={<Mediciene/>}></Route>
        <Route path="/Bone" element={<Bone/>}></Route>
        
        </Routes>
    )


}