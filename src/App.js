import React from 'react'
import "./index.css"
import { Route, Routes } from 'react-router-dom'
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import Login from "./routes/Login"
import Register from "./routes/Register"
import HomeLogin from "./routes/HomeLogin"
import PageQuest from "./routes/PageQuest"
import PageCreate from "./routes/PageCreate"
import PageEdit from "./routes/PageEdit"
import PageDelete from './routes/PageDelete'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homelogin" element={<HomeLogin />} />
      <Route path="/pagequest" element={<PageQuest />} />
      <Route path="/pagecreate" element={<PageCreate />} />
      <Route path="/pageedit/:id" element={<PageEdit />} />
      <Route path="/pagedelete/:id" element={<PageDelete />} />
    </Routes>
    </>
  );
}

export default App;  
