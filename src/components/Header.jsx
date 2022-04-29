import React, { useState, useEffect } from 'react'
import '../styles/Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Header = ({executeScroll}) => {

  const state = useSelector((state => state))
  const navigate = useNavigate()

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(state.cart.cart.length)
  },[state.cart])


  


  return (
    <div className="container-fluid mt-4 header-wrapper">
      <div className="row m-4">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <Link className='menu-logo' to='/'>
            <h4 className='font-weight-bold'>JJ COLLECTION</h4>
          </Link> 
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <ul className='menu-links'>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => executeScroll()}>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-4 menu-buttons">
          <button type="button" className="btn btn-outline-dark d-flex justify-content-center align-items-center font-weight-bold">
            <box-icon size='sm' name="log-in"/> Login 
          </button>
          <button type="button" className="btn btn-outline-dark d-flex justify-content-center align-items-center font-weight-bold">
            <box-icon size='sm' name="user"/>  Register 
          </button>
          <button
            onClick={() => {
              navigate('/cart')
            }} 
            type="button" className="btn btn-outline-dark d-flex justify-content-center align-items-center font-weight-bold">
            <box-icon size='sm' name="cart"/> Cart ({count}) 
          </button>
        </div>
      </div>
    </div>
  )
}

