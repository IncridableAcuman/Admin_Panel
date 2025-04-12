import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'
import { Code2 } from 'lucide-react';
import data from './ChartData';
const Compaign = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
    <div className="border border-gray-300 p-4 text-center space-y-2 rounded">
        <div className="flex items-center justify-between p-2">
            <h2>Compaign</h2>
            <Code2/>
        </div>
        <PieChart width={80} height={80} className='mx-auto'>
            <Pie data={data}
            dataKey="uv"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="100%"
            fill='#8884d8'>
                {data.map((entry,index)=>(
                    <Cell key={`cell-${index}`} fill={COLORS[index%COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
        <p className='text-sm text-gray-500'>$70.1 revenue generated</p>
        <h2>Includes extra misc expenditures and costs</h2>
    </div>
    </>
  )
}

export default Compaign