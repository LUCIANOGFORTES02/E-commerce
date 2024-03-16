import {Routes,Route} from "react-router-dom"
import { RequireAuth } from './auth/RequireAuth'
import Login from './pages/Login/login'
import Home from './pages/Home/page'
import CatalogoPage from "./catalog/page"
import PageCategoryProducts from "./category/page"



export default function Router() {
  return (
  

      <Routes>
        <Route path='/' 
                  element={<Home/>  } />

        <Route path='/catalogo' 
                  element={<CatalogoPage/>  } />
          
        <Route path='/login' 
                element={ 
                        <Login/> }/>
        <Route path="/category/:slug"
                element={
                        <PageCategoryProducts/> }/>


          {/* { <Route path='/home' 
                  element={<RequireAuth> 
                            <Home/> 
                        </RequireAuth>} /> } */}

      </Routes>

  )
}
