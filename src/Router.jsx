import React, { lazy,Suspense } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Loader from './components/loader/Loader'
import Navbar from './components/navbar/Navbar'
import './App.css'


const Home = lazy(()=>import('./pages/home/Home'))
const Upload = lazy(()=>import('./pages/upload/Upload'))
const Model = lazy(()=>import('./pages/model/Model'))

const Router = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<Loader/>}>
          <Navbar/>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Upload/>} path="/upload"/>
                <Route element={<Model/>} path="/model/:id"/>
            </Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default Router