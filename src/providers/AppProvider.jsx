import React from 'react'
import AuthProvider from './AuthProvider'
import ProductProvider from './ProductProvider'


const AppProvider = ({children}) => {
  return (
    <AuthProvider>
      <ProductProvider>
        {children}
      </ProductProvider>
    </AuthProvider>
  )
}

export default AppProvider