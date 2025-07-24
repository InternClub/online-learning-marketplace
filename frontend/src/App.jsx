import './App.css'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import NavBar from './Pages/Utility/NavBar'
import Register from './Pages/System-level/Register'
import Login from './Pages/System-level/Login'
import PageNotFound from './Pages/System-level/404'
import ResetPassword from './Pages/System-level/ResetPassword'
import Homepage from './Pages/Learner/Homepage'
// import Loading from './Pages/System-level/Loading'
import Courses from './Pages/Learner/Courses'
import CourseDetails from './Pages/Learner/CourseDetails'

function App() {
  

  return (
    <div className='primary'>
      {/* <Loading /> */}
    <BrowserRouter>
    <NavBar />
          <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/coursedetails' element={<CourseDetails />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
          </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
