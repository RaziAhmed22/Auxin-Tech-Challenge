import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const LineGraph = ({header, graphData}) => {
  return (
    <div>
        <div style={{width:'100%', textAlign:'center'}}><h4>{header} Vaccination Data</h4></div>
            <LineChart
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
                <Line type="monotone" dataKey="daily_vaccinations" stroke="#8884d8"  />
                <Line type="monotone" dataKey="daily_vaccinations_per_million" stroke="#82ca9d" />
                <Line type="monotone" dataKey="daily_people_vaccinated" stroke="#00FF00" />
                <Line type="monotone" dataKey="daily_people_vaccinated_per_hundred" stroke="#FFA500" />
            </LineChart>
    </div>
  )
}
