import React, { useContext, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import CartItem from '../../components/CartItem'
import { Download, Search } from 'lucide-react'
import LineCharts from '../../resources/LineCharts'
import Quantity from '../../resources/Quantity'
import Compaign from '../../resources/Compaign'
import { ThemeContext } from '../../contexts/ThemeProvider'
import GeoChart from '../../resources/GeoChart'
const Home = () => {
  const [sidebarIsOpen,setIsSidebarOpen]=useState(false);
  const {theme}=useContext(ThemeContext);
  const contenting=[
    {id:1,name:"Izzatbek",date:"10.10.2003",price:70.5},
    {id:2,name:"Ismoil",date:"29.03.2005",price:71.5},
    {id:3,name:"Bahrom",date:"24.03.2006",price:72.5}
  ]
  return (
    <>
    <div className={`${theme==="light"?"bg-gray-900 text-white": "bg-white text-gray-900"} h-screen`}>
          <Navbar onMenuClick={()=>setIsSidebarOpen(true)}/>
          <Sidebar isOpen={sidebarIsOpen} setIsOpen={setIsSidebarOpen}/>
          
          <div className=" flex flex-col md:flex-row md:ml-64 mt-16 px-8 py-4  items-center justify-between">
            <div className="flex items-center gap-3 border-2 mb-4 border-gray-700 p-3 ">
              <input type="text" placeholder='Search' className={`outline-none ${theme==="light"? "bg-gray-900 text-white":"bg-white text-gray-900"} `} />
              <Search/>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 cursor-pointer uppercase shadow-lg text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition duration-300">
              <Download/>
              <h2>reports</h2>
            </div>
          </div>
          <div className="lg:ml-64 mt-16 normalize">
            <CartItem/>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:ml-64">
            <div className="w-full">
              <LineCharts/>
            </div>
            <div className={`w-full max-w-md ${theme==="light"? "bg-gray-800 text-white":"bg-white text-gray-800"}  max-h-64 rounded shadow-lg mx-auto`}>
              <h2 className='text-center p-2 text-lg font-semibold'>Recent Transactions</h2>
              {/* transaction item */}
                {contenting.map((item,index)=>(
                  <div key={index} className="flex items-center justify-between p-2 border-b-2 border-gray-500">
                    <div className="">
                      <p>{item.id}</p>
                      <p>{item.name}</p>
                    </div>
                    <p>{item.date}</p>
                    <button>{item.price}</button>
                  </div>
                ))}
            </div>
          </div>
          {/* three content */}
          <div className={`${theme==="light"?"bg-gray-900 text-white":"bg-white text-gray-900"} grid grid-cols-1 lg:grid-cols-3 gap-6 lg:ml-64 normalize`}>
            <Compaign/>
            <Quantity/>
            <GeoChart/>
          </div>
    </div>

    </>
  )
}

export default Home