import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import About from './pages/About'
import Equipment from './pages/Equipment'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
 const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='equipment'  element={<Equipment/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>

 ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
