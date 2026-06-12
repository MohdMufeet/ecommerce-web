import { RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import router from './components/router/Router'

function App() {

  return (
  <>
   <RouterProvider router={router}/>
  </>
  )
}

export default App
