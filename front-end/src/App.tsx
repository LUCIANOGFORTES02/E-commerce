import './App.css'
import Header from './components/ui/header'
import { Route,Routes, Link } from 'react-router-dom'
import Auth from './components/auth/Auth'

function App() {

  return (
    <div>
    <Header/>
    <nav>
      <Link to="/private">Auth</Link>
    </nav>
      
    
    <Routes>
      <Route path='/private' element={<Auth/>}/>

    </Routes>
  
    </div>

  )
}

export default App
