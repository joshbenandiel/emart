import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/cartSlice'
import '../styles/Cart.css'
import { Header } from './Header'


export const Cart = ({executeScroll}) => {
  
  
  const dispatch = useDispatch()

  const cartItem = useSelector(state => state.cart.cart)


  return (
    <>
    <Header executeScroll={executeScroll}/>
      {cartItem.length === 0 &&
        <div className='item-wrapper'>
          <h1 className=''>Your Cart is Empty</h1>
        </div>
      
      }
      {cartItem && cartItem.map(item => {
        return (
        <div key={item.id} className="container-fluid p-0">
          <div className="row item-wrapper">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img className='item-image-cart' src={item.image} alt={item} />
            </div>
            <div className="col-4 mt-4">
              <h2 className='mb-4'>{item.title}</h2>
              <h4 className='mb-4'>{item.count} X ${item.price} = ${(item.count*item.price).toFixed(2)}</h4>
              <div className='button-section-cart'>
                <button 
                 onClick={() => {
                    dispatch(decrement(item))
                 }}
                 type="button" 
                 className="btn btn-outline-dark btn-lg button-size"><span className='mb-2'>-</span></button>
                <button 
                  onClick={() => {
                    dispatch(increment(item))
                  }}
                  type="button" 
                  className="btn btn-outline-dark btn-lg button-size"><span className='mb-2'>+</span></button>
              </div>
            </div>
          </div>
        </div>
        )
      })}

    </>
  )
}

