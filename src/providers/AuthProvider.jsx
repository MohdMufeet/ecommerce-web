import React,{useState} from 'react'
import { AuthContext } from '../context/AuthContext'

const AuthProvider = ({children}) => {
    const [isAuthenticate,setIsAuthenticate] = useState(false);
    const [user,setUser] = useState(null);


    const loginGlobal = (data) => {
            setIsAuthenticate(true);
            setUser(data);
    }
    const logoutGlobal = () => {
            setIsAuthenticate(false);
            setUser(null);
    }

    
  return (
    <AuthContext.Provider value={{isAuthenticate,setIsAuthenticate,user,setUser,loginGlobal,logoutGlobal}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider