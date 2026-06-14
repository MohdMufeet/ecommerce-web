import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    const {user} = useAuth();
  return (
   <>
   <div className="w-full h-content flex justify-center items-center">
    <p className="text-xl font-medium m-6">
    Hii, {"  "} 
    <span className="text-2xl font-bold">
        {user.name}
        </span>

    </p>
   </div>
   </>
  )
}

export default UserDashboard