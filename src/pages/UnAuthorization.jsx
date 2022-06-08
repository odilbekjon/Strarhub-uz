import { Route, Routes } from "react-router-dom"
import Login from "./Login";


export default function UnAuthorization(){
    return(
        <>
           <Routes>
                <Route path='/login' element={<Login/>}/>
           </Routes>
        </>
    )
}