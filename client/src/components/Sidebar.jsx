import {
    Calendar,
    ChartBar,
    ChartLine,
    ChartPie,
    Code2,
    Info,
    LayoutDashboard,
    Map,
    Menu,
    NotepadText,
    User,
    Users,
    UserSquare,
    X,
  } from "lucide-react";  
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
  const Sidebar = ({isOpen,setIsOpen}) => {
  const {theme}=useContext(ThemeContext);
    const SidebarData = [
      { name: "Manage Team", icon: <Users size={20} />, path: "#" },
      { name: "Contact Information", icon: <UserSquare size={20} />, path: "#" },
      { name: "Invoice Balances", icon: <NotepadText size={20} />, path: "#" },
    ];
  
    const PagesData = [
      { name: "Profile Form", icon: <User size={20} />, path: "#" },
      { name: "Calendar", icon: <Calendar size={20} />, path: "#" },
      { name: "FAQ Page", icon: <Info size={20} />, path: "#" },
    ];
  
    const ChartData = [
      { name: "BarChart", icon: <ChartBar size={20} />, path: "#" },
      { name: "PieChart", icon: <ChartPie size={20} />, path: "#" },
      { name: "Line Chart", icon: <ChartLine size={20} />, path: "#" },
      { name: "Geaography Chart", icon: <Map size={20} />, path: "#" },
    ];
  
    return (
      <>
        <div className={`flex ${theme==="light"? "bg-gray-900 text-white":"bg-white text-gray-900"}`}>
          {/* Overlay */}
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            />
          )}
  
          {/* Sidebar */}
          <div
            className={`w-64 fixed top-0 right-0 ${theme==="light"? "bg-gray-900 text-white":"bg-white text-gray-900"}  border-l-2 border-gray-500 min-h-screen z-50 
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
            lg:left-0 lg:right-auto lg:translate-x-0 lg:border-r-2 lg:border-l-0`}
          >
            <div className="flex items-center justify-between p-4">
              <h2 className="text-lg font-semibold">Admin</h2>
              <Code2 className="cursor-pointer text-gray-300 hover:text-white transition hidden lg:block" />
              {isOpen && (
                <button
                  className={`lg:hidden ${theme==="light"? "text-gray-300 hover:text-white transition":"text-gray-700 hover:text-gray-900 transition"}  cursor-pointer `}
                  onClick={() => setIsOpen(false)}
                >
                  <X />
                </button>
              )}
            </div>
  
            <div className="flex items-center px-4 py-2 gap-3 mt-2">
              <LayoutDashboard />
              <p>Dashboard</p>
            </div>
  
            <div className="px-4 py-2">
              <p>Data</p>
              {SidebarData.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 hover:text-white transition rounded-lg"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
  
            <div className="px-4 py-2">
              <p>Pages</p>
              {PagesData.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 hover:text-white transition rounded-lg"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
  
            <div className="px-4 py-2">
              <p>Charts</p>
              {ChartData.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 hover:text-white transition rounded-lg"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
          </div>
  
          {/* Menu button */}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden fixed top-5 right-4 cursor-pointer text-gray-300 hover:text-white transition"
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </>
    );
  };
  
  export default Sidebar;
  