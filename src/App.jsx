import { RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import router from './components/routes/Router'
import {AppProvider} from './providers'

function App() {

  return (
  <>
 <AppProvider>
   <RouterProvider router={router}/>
 </AppProvider>
  </>
  )
}

export default App
