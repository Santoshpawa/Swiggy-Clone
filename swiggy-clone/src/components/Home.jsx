import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";


function Home(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = ()=>{
        dispatch(logout());
        navigate("/login");
    }
    return(
        <>
        <h2>Home</h2>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Home;