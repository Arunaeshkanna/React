import React from 'react'
import Navbar from './components/NavBar'
import WebLayouts from './layouts/WebLayouts'
import Profile from './pages/Profile'
import { BrowserRouter,Routes, Route }from 'react-router-dom'
import Project from './pages/Project'
import Contact from './pages/Contact'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element = {<WebLayouts />}>
            <Route path="/" element={<Profile/>} />
            <Route path="/Project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
        </Route> 
      </Routes>   
    </BrowserRouter>
    </>
  )
}
export default App
