import { Webhook } from 'lucide-react'
import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts'
import data from './ChartData'
const Quantity = () => {
  return (
    <>
    <div className="border border-gray-300   text-center space-y-2 rounded">
        <div className="flex items-center justify-between p-2">
            <h2>Sales Quantity</h2>
            <Webhook/>
        </div>
       <ComposedChart width={300} height={200} data={data}>
        <CartesianGrid stroke='#f5f5f5'/>
        <XAxis name='name' scale='band'/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
        <Bar dataKey='pv' barSize={10} fill='#413ea0'/>
        <Line type='monotone' dataKey='uv' fill='#ff7300'/>
       </ComposedChart>
    </div>
    </>
  )
}

export default Quantity