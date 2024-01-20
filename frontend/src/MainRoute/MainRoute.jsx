import { Route, Routes } from "react-router-dom"
import SignUp from "../component/SignUp"
import Login from "../component/Login"
import Landing from "../component/Landing"


export const MainRoute = () => {

    return (
   <Routes>
   <Route path="/" element={<Landing/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
   </Routes>
    )
}
