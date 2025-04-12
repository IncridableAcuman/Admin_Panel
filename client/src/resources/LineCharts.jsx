import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from './ChartData';
const LineCharts = () => {
  return (
    <>
    <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="pv" stroke='#8884d8'/>
                <Line type="monotone" dataKey="uv" stroke='#82ca9d'/>
        </LineChart>
    </ResponsiveContainer>
    </>
  )
}

export default LineCharts