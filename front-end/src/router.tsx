import React from 'react'
import {Routes,Route} from "react-router-dom"
import { RequireAuth } from './auth/RequireAuth'
import Login from './pages/Login/login'
import App from './App'


export default function Router() {
  return (
  

      <Routes>
        <Route path='/' 
                  element={ <App/> } />
          
          <Route path='/login' 
                  element={<RequireAuth> 
                            <Login/> 
                        </RequireAuth>} />

      </Routes>

  )
}
