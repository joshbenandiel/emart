import React , { useState, useEffect, useRef }from 'react'
import '../styles/Products.css'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedItem } from '../redux/itemSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export const Products = ({myRef}) => {

  const axios = require('axios');
  const dispatch = useDispatch()
  const [products, setProducts] = useState()
  const [category, setCategory] = useState('')
  const [itemId, setItemId] = useState('')
  const [selectedProduct, setSelectedProduct] = useState([])

  const navigate = useNavigate();

  const getProducts = async() => {
    const path = 'https://fakestoreapi.com/products'
    const result = await axios.get(path)
    setProducts(result.data)
  }

  useEffect(() => {
    getProducts()
  },[])
  


  const getSelectedProduct = () => {
    let items = []
    products.forEach(item => {
      if(item.category === category){
        items.push(item)
      }
      setSelectedProduct(items)
    })
    if(category === 'all'){
      setSelectedProduct(products)
    }
  }
  
  useEffect(() => {
    if(products){
      getSelectedProduct()
    }
  },[category])






  
  
  const getSelectedItem = async(item) => {
    setItemId(item)
    const path = `https://fakestoreapi.com/products/${item}`
    const result = await axios.get(path)
    dispatch(setSelectedItem(result.data))
    navigate(`../products/${item}`, { replace: true });
  }
  
  
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      buttonRef.current.click()
    }, 1000);

    return () => window.clearTimeout(timeoutID );

  }, []);


  
  return (
    <div ref={myRef} className='products-container'>
      <div className='w-75'>
        <h1 className='products-header'>Latest Products</h1>
      </div>
      <div className='products-section'>
        <div className='button-wrapper'> 
          <button 
            ref={buttonRef}
            onClick={(e) => {
              setCategory(e.target.value)
            }} 
            type="button" 
            value='all'
            className="btn btn-outline-dark">All</button>
          <button 
            onClick={(e) => {
              setCategory(e.target.value)
            }} 
            type="button" 
            value="men's clothing"
            className="btn btn-outline-dark">Men's Clothing</button>
          <button 
            onClick={(e) => {
              setCategory(e.target.value)
            }} 
            type="button" 
            value="women's clothing"
            className="btn btn-outline-dark">Women's Clothing</button>
          <button 
            onClick={(e) => {
              setCategory(e.target.value)
            }} 
            type="button" 
            value='jewelery'
            className="btn btn-outline-dark">Jewelry</button>
          <button 
            onClick={(e) => {
              setCategory(e.target.value)
            }} 
            type="button" 
            value='electronics'
            className="btn btn-outline-dark">Electronic</button>
        </div>
      </div>
      <div className='products-card-section'>
          {selectedProduct && selectedProduct.map(item => {
              return (
              <div key={item.id} className=''>
                <div className='products-card'>
                  <img className='product-image' src={item.image} alt="item" />  
                  <h4 className='mt-2 product-card-title'>{item.title}</h4>
                  <h4>${item.price}</h4>
                  <div className=''>
                    <button 
                      onClick={() => {
                        getSelectedItem(item.id)
                      }}
                      type="button" className="btn btn-outline-dark mt-3 mb-2">Buy Now</button>
                  </div>
                </div>
              </div>
              )
            })
          }
      </div>
    </div>
  )
}

