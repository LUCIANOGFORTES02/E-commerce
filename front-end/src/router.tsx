import {Routes,Route} from "react-router-dom"
import { RequireAuth } from './auth/RequireAuth'
import Login from './pages/Login/login'
import Home from './pages/Home/page'
import CatalogoPage from "./catalog/page"
import PageCategoryProducts from "./category/page"
import ProductDetailsPage from "./product/page"
import { useEffect } from "react"
import AdminPage from "./pages/admin/page"
import AddProducts from "./pages/admin/components/addProducts"



export default function Router() {
        useEffect(()=>{

        },[])



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
        <Route path="/product/:slug"
                element={
                        <ProductDetailsPage/> }/>


           { <Route path='/admin' 
                  element={<RequireAuth> 
                            <AdminPage/> 
                        </RequireAuth>} /> } 
                        { <Route path='/addproducts' 
                  element={<RequireAuth> 
                            <AddProducts/> 
                        </RequireAuth>} /> } 

      </Routes>

  )
}
