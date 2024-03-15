import './App.css'
import { RequireAuth } from './auth/RequireAuth'
import Header from './components/ui/header'
import Home from './pages/Home/page'
import { Route,Routes, Link, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login/login'
import PrivateTeste from './pages/Private/private'
import { AuthProvider } from './auth/AuthProvider'
import Router from './router'
import Footer from './components/ui/footer'



function App() {

  return (
    
    <AuthProvider>
      <BrowserRouter>
       <Header/>
       <Router /> 
       
        {/* <Footer/> */}
      </BrowserRouter>
    </AuthProvider>
 
  )
}

export default App
