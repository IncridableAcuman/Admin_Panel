import { Bell, Menu, Moon, Settings, User } from 'lucide-react'
const Navbar = ({onMenuClick}) => {
  return (
    <>
   <div className="fixed top-0 left-0 w-full flex items-center justify-between z-10 px-6 py-4 bg-gray-900 text-white border-b-2 border-gray-500">
        <h1 className=' text-2xl lg:ml-64 font-semibold cursor-pointer hover:text-indigo-600 transition'>Web<span className='text-indigo-600'>Logo</span></h1>
        <div className="flex items-center gap-4 mr-2 cursor-pointer">
            <Moon className='hover:text-gray-500 transition'/>
            <Bell className='hover:text-gray-500 transition'/>
            <Settings className='hover:text-gray-500 transition'/>
            <User className='hover:text-gray-500 transition'/>
            <Menu className='cursor-pointer block md:hidden text-gray-300 hover:text-white transition'
            onClick={onMenuClick}/>
        </div>
   </div>
    </>
  )
}

export default Navbar