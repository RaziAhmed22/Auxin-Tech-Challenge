import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const BarGraph = ({header, graphData}) => {
  return (
    <div>
        <div style={{width:'100%', textAlign:'center'}}><h4>{header} Vaccination Data</h4></div>
        <BarChart
          width={900}
          height={300}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="daily_vaccinations" fill="#8884d8" />
          <Bar dataKey="daily_vaccinations_per_million" fill="#82ca9d" />
          <Bar dataKey="daily_people_vaccinated" fill="#00FF00" />
          <Bar dataKey="daily_people_vaccinated_per_hundred" fill="#FFA500" />
        </BarChart>
    </div>
  )
}

export default BarGraph