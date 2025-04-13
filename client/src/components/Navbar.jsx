import { Bell, Menu, Moon, Settings, Sun, User } from 'lucide-react'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeProvider'
const Navbar = ({onMenuClick}) => {
  const {theme,toggleTheme}=useContext(ThemeContext);
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
            <User className='hover:text-gray-500 transition'/>
            <Menu className={`cursor-pointer block md:hidden ${theme==="light"? "text-gray-300 hover:text-white transition" : "text-gray-700 hover:text-gray-900 transition"} transition`}
            onClick={onMenuClick}/>
        </div>
   </div>
    </>
  )
}

export default Navbar