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
      <Link to='/login'>Página de Login</Link>
      <Link to='/private'>Página privada</Link>

  <Routes>

    <Route path='/login' element={
      <RequireAuth> 
        <Login/> 
      </RequireAuth>
    } />
    <Route path='/private' element={
      <RequireAuth> 
        <PrivateTeste/> 
      </RequireAuth>
    } />

  </Routes>
      
    </div>
  )
}

export default App
