import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, STATUSES } from '../store/ProductSlice'
import ProductCart from './ProductCart'

function ProductContainer() {

  const dispatch = useDispatch()

 const { data : products , status} = useSelector(state => state.product)

  //   const [products , setProducts ] = useState([])

  //  const getProduct = async() => {
        
  //       const res = await fetch(`https://fakestoreapi.com/products`)
  //       const data = await res.json()
  //       setProducts(data)
  //   }


    useEffect(()=> {
      dispatch(fetchData())
    },[])


    if(status === STATUSES.LOADING){ 
      return <h1>LOADING ....</h1>

    }
    if(status === STATUSES.ERROR){ 
      return <h1>Something went wrong ....</h1>
    }

    if(status )
    
   return (
    
    <div className="container">
    <h1 className="all-products-title">All Products</h1>
   
   { 
   
   products.map(product => <ProductCart key={product.id} product= {product}/>)
   }

    </div>

  )
}

export default ProductContainer