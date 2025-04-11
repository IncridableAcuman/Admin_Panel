import React from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
const Home = () => {
  return (
    <>
    <div className="bg-gray-900 min-h-screen">
          <Navbar/>
          <Sidebar/>
    </div>

    </>
  )
}

export default Home