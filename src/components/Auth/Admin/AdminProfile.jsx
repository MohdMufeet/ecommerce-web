import React from 'react'
import { Link } from 'react-router-dom'
import useAdmin from '../../../hooks/useAdmin'

const AdminProfile = () => {
  const {admin} = useAdmin();
  
  return (
    <>
    <p>Welcome, {admin.name}</p>
    <Link to="/admin/profile">Profile</Link>
    <Link to="/admin/All-products">All Products</Link>
    <Link to="/admin/create-product">Create Product</Link>
    </>
  )
}

export default AdminProfile