import React from 'react'
import { useHistory } from 'react-router-dom'
import BarGraph from '../../components/BarGraph'
import { LineGraph } from '../../components/LineGraph'
import { LoginPage } from '../loginpage/LoginPage'
import { COVID_DATA } from './covid-latest-data'
import { DATA } from './data'
import './HomePage.css'

export const HomePage = ({auth, setAuth}) => {
  const [authentication, setAuthentication] = React.useState(JSON.parse(localStorage.getItem('auth')))
  const history = useHistory()

  React.useEffect(()=>{
    setAuthentication(JSON.parse(localStorage.getItem('auth')))
  },[authentication])

  React.useEffect(()=>{
    if(!authentication) history.push('/')
  },[authentication])

  return (
    <>
      {authentication
        ?<div className='home-component-wrapper'>
          <div style={{width:'100%', textAlign:'right', margin:'10px'}}>
            <button 
              onClick={()=>{ history.push('/');localStorage.setItem('auth', JSON.stringify(false));setAuth(false)}}
            >
              Logout
            </button>
          </div>
          <h2>HomePage</h2> 
          <LineGraph header={DATA[0]?.country} graphData={DATA[0]?.data}/>
          <BarGraph header={COVID_DATA[0]?.country} graphData={COVID_DATA[0]?.data} />
        </div>
        :<div>404 error</div>
      }
    </>
  )
}
