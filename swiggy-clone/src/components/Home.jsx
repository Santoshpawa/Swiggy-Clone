import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import Navbar from "./Navbar";
import Section1 from "./Section1";



function Home(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    return(
        <>
        <Navbar></Navbar>
        <Section1/>
        </>
    )
}

export default Home;