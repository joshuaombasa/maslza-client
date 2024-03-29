import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import VendorLayout from './components/VendorLayout'
import About from './pages/About'
import Equipment,{loader as equipmentLoader} from './pages/Equipment'
import EquipmentDetails, {loader as equipmentDetailsLoader} from './pages/EquipmentDetails'
import Home from './pages/Home'
import Login, {loader as loginLoader, action as loginAction} from './pages/Login'
import NotFound from './pages/NotFound'
import Dashboard from './pages/vendor/Dashboard'
import Income from './pages/vendor/Income'
import Reviews from './pages/vendor/Reviews'
import VendorEquipment from './pages/vendor/VendorEquipment'

function App() {
 const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='equipment'  loader={equipmentLoader}  element={<Equipment/>}/>
      <Route path='equipment/:id' loader={equipmentDetailsLoader} element={<EquipmentDetails/>}/>
      <Route path='login' loader={loginLoader} action={loginAction} element={<Login/>}/>
      <Route path='vendor'  element={<VendorLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='income' element={<Income/>}/>
        <Route path='equipment' element={<VendorEquipment/>}/>
        <Route path='reviews' element={<Reviews/>}/>
      </Route>
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
