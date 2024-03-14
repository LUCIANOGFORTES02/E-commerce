import './App.css'
import { RequireAuth } from './auth/RequireAuth'
import Header from './components/ui/header'
import Home from './pages/Home/page'
import { Route,Routes, Link, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login/login'
import PrivateTeste from './pages/Private/private'
import { AuthProvider } from './auth/AuthProvider'
import Router from './router'



function App() {

  return (
    <div>
     <Header/>
     <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
     {/* Conteúdo  as rotas*/}
     {/* Footer */}
     
    </div>
  )
}

export default App
