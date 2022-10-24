import React from 'react'
import HomeComponent from '../../components/Home/Index'
import './Home.css'
import Nav from "../../components/Nav/Index";

export default function Home() {
  return (
    <div className='home-page'>
      <div className='nav-page'>
        <Nav/>
      </div>
      <div className='body'>
        <div className='left-page'>left page</div>
        <div className='center-page'>
          <HomeComponent/> 
        </div>
        <div className='rigth-page'>rigth page</div>

      </div>
            
    </div>
  )
}
 