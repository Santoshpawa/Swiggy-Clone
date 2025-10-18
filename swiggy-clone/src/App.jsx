
import './App.css'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
