import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import axiosAPI from '../../api/axiosAPI';
import {toast} from 'react-toastify'
const Login = () => {
  const navigate=useNavigate();
  const [isLogin,setIsLogin]=useState("Sign In");
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(isLogin==="Sign Up"){
      try {
        const {data}=await axiosAPI.post("/auth/register",{username,email,password});
        localStorage.setItem("accessToken",data.accessToken);
        toast.success("Successfully Sign Up");
        navigate("/");
      } catch (error) {
        toast.error("Something went wrong");
        console.log(error);
      }
    } else{
      try {
        const {data}=await axiosAPI.post("/auth/login",{email,password});
        localStorage.setItem("accessToken",data.accessToken);
        toast.success("Successfully Sign In");
        navigate("/")
      } catch (error) {
        toast.error("Something went wrong");
        console.log(error);
      }
    }
  }

  useEffect(()=>{
    if(localStorage.getItem('accessToken')){
      navigate("/auth");
    }
  },[navigate])
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section: Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Get Started Now</h2>
          <form onSubmit={handleSubmit}>
            {isLogin==="Sign Up"? (
              <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
            </div>
            ) :<></>}        
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-green-500" />
                <span className="ml-2 text-gray-700 text-sm">
                  I agree to the <a href="#" className="text-green-500">Terms & Policy</a>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg cursor-pointer hover:bg-green-700 transition duration-300"
            >
              {isLogin}
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-700 mb-4">or</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center px-4 py-2
              cursor-pointer border rounded-lg hover:bg-gray-100">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Sign in with Google
              </button>
              <button className="flex items-center justify-center px-4 py-2 
              cursor-pointer border rounded-lg hover:bg-gray-100">
                <img
                  src="https://www.github.com/favicon.ico"
                  alt="Apple"
                  className="w-5 h-5 mr-2"
                />
                Sign in with Github
              </button>
            </div>
            {isLogin==="Sign In" ? (
               <p className="mt-4 text-gray-700">
               Create new an account? <span className="text-green-500 cursor-pointer hover:text-green-700"
               onClick={()=>setIsLogin("Sign Up")}>Sign Up</span>
             </p>
            
            ) : (
              <p className="mt-4 text-gray-700">
              Have an account? <span className="text-green-500 cursor-pointer hover:text-green-700"
              onClick={()=>setIsLogin("Sign In")}>Sign in</span>
            </p>
            )}
           
           
          </div>
        </div>
        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="./login.jpg"
            alt="Leaves"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Login