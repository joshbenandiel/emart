import React from 'react'
import '../styles/Main.css'
import { Products } from './Products'


export const Main = ({myRef}) => {
  return (
    <>
      <div className='main-container position-relative'>
        <div className='image-container'>
        
        </div>
        <div className='main-text'>
          <h1>NEW SEASON ARRIVAL</h1>
          <p>CHECK OUT ALL THE TRENDS</p>
        </div>
      </div>
      <Products myRef={myRef}/>
    </>
  )
}
