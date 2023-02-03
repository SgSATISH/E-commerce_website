import {add} from '../store/CartSlice'
import { useDispatch } from 'react-redux'

function ProductCart({product}) {

  const dispatch = useDispatch()


  const handleAdd = (product) => {

    dispatch(add(product))

  }

    const {image, title, price } = product 
  return (
    <div>
        <div className="product">
      <img src={image} alt="" />
      <h1>{title} </h1>
      <span>
        <h3>Price : {price}</h3>
        <button className="add_cart" onClick={()=> handleAdd(product)}>
          Add to cart
        </button>
      </span>
    </div>
      
    </div>
  )
}

export default ProductCart
