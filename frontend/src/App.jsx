import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Learner/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="primary">
      {/* <NavBar /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
import './App.css'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import NavBar from './Pages/Utility/NavBar'
import Register from './Pages/System-level/Register'
import Login from './Pages/System-level/Login'
import PageNotFound from './Pages/System-level/404'
import ResetPassword from './Pages/System-level/ResetPassword'

function App() {
  

  return (
    <div className='primary'>
    <BrowserRouter>
    <NavBar />
          <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/resetpassword' element={<ResetPassword />} />

          </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
