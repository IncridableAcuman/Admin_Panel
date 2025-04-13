import { Webhook } from 'lucide-react'
import React, { useContext } from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts'
import data from './ChartData'
import { ThemeContext } from '../contexts/ThemeProvider'
const Quantity = () => {
  const {theme}=useContext(ThemeContext);
  return (
    <>
    <div className={` ${theme==="light"?"bg-gray-900 text-white":"bg-white text-gray-900"} border border-gray-300   text-center space-y-2 rounded`}>
        <div className="flex items-center justify-between p-2 ">
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