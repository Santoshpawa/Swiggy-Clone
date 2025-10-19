import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import Navbar from "./Navbar";


function Home(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = ()=>{
        dispatch(logout());
        navigate("/login");
    }
    return(
        <>
        <Navbar></Navbar>
        <h2>Home</h2>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Home;