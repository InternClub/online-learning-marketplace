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

export default App
