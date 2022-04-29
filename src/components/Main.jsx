import React from 'react'
import '../styles/Main.css'
import { Products } from './Products'
import { Header } from './Header'


export const Main = ({myRef, executeScroll}) => {
  return (
    <>
      <Header executeScroll={executeScroll}/>
      <div className='main-container position-relative'>
        <div className='main-text'>
          <h1>NEW SEASON ARRIVAL</h1>
          <p>CHECK OUT ALL THE TRENDS</p>
        </div>
      </div>
      <Products myRef={myRef}/>
    </>
  )
}
