import './App.css'
import { RequireAuth } from './auth/RequireAuth'
import Header from './components/ui/header'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/AuthProvider'
import Router from './router'
import Footer from './components/ui/footer'
import CartProvider from './cart/CartProvider'



function App() {

  return (
    
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
        <Header/>
        <div className='flex-1'>
          <Router /> 
        </div>
           
          {/* <Footer/> */}
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
 
  )
}

export default App
