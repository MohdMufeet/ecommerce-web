import React from 'react'
import { Link } from 'react-router-dom'
import useAdmin from '../../../hooks/useAdmin'

const AdminProfile = () => {
  const {admin} = useAdmin();
  
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-8'>
    <p className="text-3xl font-bold">Welcome, {admin.name}</p>
        <div className='flex gap-4 justify-center items-center bg-slate-50 shadow-lg rounded-full px-4 py-2 text-black'>

    <Link className="hover:text-blue-600 font-medium" to="/admin/all-orders">Orders</Link>
    <Link className="hover:text-blue-600 font-medium" to="/admin/All-products">All Products</Link>
    <Link className="hover:text-blue-600 font-medium" to="/admin/create-product">Create Product</Link>
</div>
    </div>
    </>
  )
}

export default AdminProfile