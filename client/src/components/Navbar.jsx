import { Bell, Menu, Moon, Settings, Sun, User } from 'lucide-react'
import { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeProvider'
const Navbar = ({onMenuClick}) => {
  const {theme,toggleTheme}=useContext(ThemeContext);
  const [isOpen,setIsOpen]=useState(false);
  return (
    <>
   <div className={`fixed top-0 left-0 w-full flex items-center justify-between z-10 px-6 py-4 ${theme==="light"? "bg-gray-900 text-white":"bg-white text-gray-900"}  border-b-2 border-gray-500`}>
        <h1 className=' text-2xl lg:ml-64 font-semibold cursor-pointer hover:text-indigo-600 transition'>Web<span className='text-indigo-600'>Logo</span></h1>
        <div className="flex items-center gap-4 mr-2 cursor-pointer">
          <button onClick={toggleTheme} className='cursor-pointer'>
            {theme==="light"?<Moon className='hover:text-gray-500 transition'/>:
            <Sun className='hover:text-gray-500 transition'/>}
          </button>
            
            <Bell className='hover:text-gray-500 transition'/>
            <Settings className='hover:text-gray-500 transition'/>
            <User className='hover:text-gray-500 transition' onClick={()=>setIsOpen(!isOpen)}/>
              {isOpen===true && (
                <div className={`fixed right-1 space-y-2 top-12 p-3 rounded-xl border border-gray-400 ${theme==="light"? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} `}>
                  <p className={`cursor-pointer ${theme==="light"?" hover:bg-gray-700 text-white transition " : "hover:bg-gray-300 text-gray-800 transition"}  rounded  px-2`}>Username</p>
                  <p className={`cursor-pointer ${theme==="light"?" hover:bg-gray-700 text-white transition " : "hover:bg-gray-300 text-gray-800 transition"}  rounded  px-2`}>Sign Out</p>
                </div>
              ) }
            <Menu className={`cursor-pointer block md:hidden ${theme==="light"? "text-gray-300 hover:text-white transition" : "text-gray-700 hover:text-gray-900 transition"} transition`}
            onClick={onMenuClick}/>
        </div>
   </div>
    </>
  )
}

export default Navbar