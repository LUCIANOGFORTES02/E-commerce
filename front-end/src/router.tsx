import {Routes,Route} from "react-router-dom"
import { RequireAuth } from './auth/RequireAuth'
import Login from './pages/Login/login'
import Home from './pages/Home/page'
import CatalogPage from "./catalog/page"



export default function Router() {
  return (
  

      <Routes>
        <Route path='/' 
                  element={<Home/>  } />

        <Route path='/catalog' 
                  element={<CatalogPage/>  } />
          
          <Route path='/login' 
                  element={ 
                            <Login/> 
                  }/>
          {/* { <Route path='/home' 
                  element={<RequireAuth> 
                            <Home/> 
                        </RequireAuth>} /> } */}

      </Routes>

  )
}
