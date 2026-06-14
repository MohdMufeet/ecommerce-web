import React, { useState } from 'react'
import { ProductContext } from '../context/ProductContext'


const ProductProvider = ({children}) => {
const [product,setProduct] = useState(null);
const [products,setProducts] = useState([]);

const fetchProduct = (data) => {
        setProduct(data)
}

const fetchAllProducts =(data) => {
            setProducts(data)
}
  return (
    <ProductContext.Provider value={{products,product,setProducts,setProducts,fetchProduct,fetchAllProducts}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider