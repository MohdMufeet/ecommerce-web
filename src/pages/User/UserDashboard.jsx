import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    const {user} = useAuth();
  return (
   <>
   <div>
    hii, {user.name}
   </div>
   <Link to="/">
   home
   </Link>
   </>
  )
}

export default UserDashboard