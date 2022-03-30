import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../styles/SelectedProduct.css'
import { useNavigate } from "react-router-dom";
import { addToCart } from '../redux/cartSlice'

export const SelectedProduct = () => {

  const item = useSelector(state => state.item.item)
  console.log(item)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className='item-container'>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex align-items-center mt-5">
            <img className='item-image' src={item.image} alt="item" />
          </div>
          <div className="col-6 d-flex justify-content-center flex-column mt-5">
            <h3 className='item-category-text'>{item.category.toUpperCase()}</h3>
            <h1>{item.title}</h1>
            <h4 className='item-rating-text'>Rating {item.rating.rate} ★</h4>
            <h1 className='mt-3 mb-3'>${item.price}</h1>
            <p className='item-description'>{item.description}</p>
            <div className='item-button-section'>
              <button 
                onClick={() => {
                  dispatch(addToCart(item))
                }}
                type="button" 
                className="btn btn-outline-dark btn-lg">Add to Cart</button>
              <button 
                onClick={() => {
                  navigate('/cart')
                }}
                type="button" 
                className="btn btn-dark btn-lg">Go to Cart</button>   
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

