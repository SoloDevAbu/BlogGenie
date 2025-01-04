import React, { Suspense, lazy } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const Home = lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}