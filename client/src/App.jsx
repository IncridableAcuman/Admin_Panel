import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/LoginPage/Login'
import Auth from './pages/Auth/Auth'
import {ToastContainer} from 'react-toastify'
const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/auth' element={<Auth/>} />
    </Routes>
    </>
  )
}

export default App