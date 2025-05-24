import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import TodoContainer from './components/TodoContainer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Landing from './pages/Landing'

function App() {

  const [users,setUsers] = useState(
    [
      {
        username:"rahaman",
        password:"123"
      }
    ]
  )

  return (
    <>
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
      <Route path='/signup' element={<SignUp users={users} setUsers={setUsers}/>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
     </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App



