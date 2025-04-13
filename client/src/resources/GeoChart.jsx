import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeProvider'
import {Chart} from 'react-google-charts'
import { country } from './Country';
import { Code2 } from 'lucide-react';
const GeoChart = () => {
    const {theme}=useContext(ThemeContext);
  return (
    <>
     <div className={`${theme==="light"?"bg-gray-900 text-white":"bg-white text-gray-900"} border border-gray-300 p-4 text-center space-y-2 rounded`}>
        <div className="flex items-center justify-between p-2">
            <h2>Geaography Based Traffic</h2>
            <Code2/>
        </div>
       <Chart chartEvents={[{
        eventName:"select",
        callback:({chartWrapper})=>{
            const chart=chartWrapper.getChart();
            const selection=chart.getSelection();
            if(selection.length===0) return;
            const region=country[selection[0].row+1];
            console.log("Selected: "+region);
        },
       },
       ]}
       chartType='GeoChart'
       width="100%"
       height="100px"
       data={country}
       />
       <div className="flex items-center justify-between">
        <p>{country[0][0]}</p>
        <p>{country[0][1]}</p>   
        <p>{country[1][0]}</p>
        <p>{country[1][1]}</p>      
       </div>
       <div className="flex items-center justify-between">
        <p>{country[0][0]}</p>
        <p>{country[0][1]}</p>   
        <p>{country[2][0]}</p>
        <p>{country[2][1]}</p>      
       </div>
    </div>
    </>
  )
}

export default GeoChart