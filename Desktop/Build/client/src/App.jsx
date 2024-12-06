import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from "./pages/Register.jsx"
import Profile from './pages/Profile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/register' element={<Register/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
