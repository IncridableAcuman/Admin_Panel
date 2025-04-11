import { Calendar, ChartBar, ChartLine, ChartPie, Info, LayoutDashboard, Map, Menu, NotepadText, User, Users, UserSquare,} from 'lucide-react'
import React from 'react'

const Sidebar = () => {
    const SidebarData=[
        {name:"Manage Team",icon:<Users size={20}/>,path:"#"},
        {name:"Contact Information",icon:<UserSquare size={20}/>,path:"#"},
        {name:"Invoice Balances",icon:<NotepadText size={20}/>,path:"#"},
    ]
    const PagesData=[
        {name:"Profile Form",icon:<User size={20}/>,path:"#"},
        {name:"Calendar",icon:<Calendar size={20}/>,path:"#"},
        {name:"FAQ Page",icon:<Info size={20}/>,path:"#"},
    ]
    const ChartData=[
        {name:"BarChart",icon:<ChartBar size={20}/>,path:"#"},
        {name:"PieChart",icon:<ChartPie size={20}/>,path:"#"},
        {name:"Line Chart",icon:<ChartLine size={20}/>,path:"#"},
        {name:"Geaography Chart",icon:<Map size={20}/>,path:"#"}
    ]
  return (
    <>
    <div className="w-64 fixed top-0 left-0 bg-gray-900 text-white border-r-2 border-gray-500 min-h-screen">
        <div className="flex items-center justify-between p-4">
            <h2 className='text-lg font-semibold'>Admin</h2>
            <Menu/>
        </div>
        <div className="text-center">
            <img src="./girl.jpg" alt="logo" className='w-14 h-14 mx-auto rounded-full' />
            <h2 className='text-2xl font-bold'>Izzatbek</h2>
            <p className='text-sm text-gray-300'>Software Engineer</p>
        </div>
        <div className="flex items-center px-4 py-2 gap-3 mt-2">
            <LayoutDashboard/>
            <p>Dashboard</p>
        </div>
        <div className=" px-4 py-2">
            <p>Data</p>
            {SidebarData.map((item,index)=>(
                <a key={index} href={item.path}
                className='flex items-center gap-3 px-4 py-2 hover:bg-gray-800 hover:text-white transition rounded-lg'>
                    {item.icon}
                    {item.name}
                </a>
            ))}
        </div>
        <div className=" px-4 py-2">
            <p>Pages</p>
            {PagesData.map((item,index)=>(
                <a key={index} href={item.path}
                className='flex items-center gap-3 px-4 py-2 hover:bg-gray-800 hover:text-white transition rounded-lg'>
                    {item.icon}
                    {item.name}
                </a>
            ))}
        </div>
        <div className=" px-4 py-2">
            <p>Pages</p>
            {ChartData.map((item,index)=>(
                <a key={index} href={item.path}
                className='flex items-center gap-3 px-4 py-2 hover:bg-gray-800 hover:text-white transition rounded-lg'>
                    {item.icon}
                    {item.name}
                </a>
            ))}
        </div>
    </div>
    </>
  )
}

export default Sidebar