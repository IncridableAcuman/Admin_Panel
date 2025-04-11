import React from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import CartItem from '../../components/CartItem'
import { Download, Search } from 'lucide-react'
const Home = () => {
  return (
    <>
    <div className="bg-gray-900 min-h-screen text-white">
          <Navbar/>
          <Sidebar/>
          <div className=" flex flex-col md:flex-row md:ml-64 mt-16 px-8 py-4  items-center justify-between">
            <div className="flex items-center gap-3 border-2 mb-4 border-gray-700 p-3">
              <input type="text" placeholder='Search' className='outline-none bg-transparent text-white' />
              <Search/>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 cursor-pointer uppercase shadow-lg bg-blue-600 rounded-lg hover:bg-blue-800 transition duration-300">
              <Download/>
              <h2>reports</h2>
            </div>
          </div>
          <div className="lg:ml-64 mt-16 normalize">
            <CartItem/>
          </div>
    </div>

    </>
  )
}

export default Home