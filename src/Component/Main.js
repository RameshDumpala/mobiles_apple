import React from 'react'
// import CountryName from './CountryName'
import IPhone from './IPhone'
import Accessories from './Accessories'
import Home from './Home'
import Pad from './Pad'
 
import Mac from './Mac'
import NA from './NA'
import Watch from './Watch'
import "./Main.css"

const Main = () => {
  return (
     <div className='scorll'>
    <div className='main_css'>
        <IPhone/>
        <Accessories/>
        <Home/>
        <Pad/>
        <Mac/>
        <NA/>
        <Watch/>
    </div>
    </div>
  )
}

export default Main