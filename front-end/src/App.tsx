import './App.css'
import { RequireAuth } from './auth/RequireAuth'
import Header from './components/ui/header'
import { Route,Routes, Link } from 'react-router-dom'
import Login from './pages/Login/login'
import PrivateTeste from './pages/Private/private'



function App() {

  return (
    <div>
      <Header/>  
    </div>
  )
}

export default App
