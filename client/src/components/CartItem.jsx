import { Code, Database, Mail, UserPlus } from 'lucide-react'
import React from 'react'
import data from '../resources/ChartData'
import { Cell, Pie, PieChart } from 'recharts'

const CartItem = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    const CardRecourse=[
        {title:"Email Sent",icon:<Mail size={20}/>,count:11361,staticPrasent:14},
        {title:"Sales Obtained",icon:<Database size={20}/>,count:431225,staticPrasent:21},
        {title:"New Clients",icon:<UserPlus size={20}/>,count:32441,staticPrasent:5},
        {title:"Traffic Received",icon:<Code size={20}/>,count:1325134,staticPrasent:14}
    ]
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CardRecourse.map((item,index)=>(
          <div key={index} className="flex items-center justify-between group bg-gray-800 bg-opacity-50  backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-2xl
           transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-2 hover:border-slate-700">
            <div className="space-y-2">
              <p className='text-gray-500'>{item.icon}</p>
              <p className='text-xl font-semibold'>{item.count}</p>
              <p className='text-sm text-gray-500'>{item.title}</p>
            </div>
            <div className="space-y-7">
              <PieChart width={40} height={40}>
                <Pie data={data}
                dataKey="uv"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="100%"
                fill='#8884d8'>
                  {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
                </Pie>
              </PieChart>
              <p className='text-sm'>{item.staticPrasent}%</p>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default CartItem