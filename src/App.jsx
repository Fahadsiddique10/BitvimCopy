import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Avail from './Component/Avail'
import Ramp from './Component/Ramp'
import Chains from './Component/Chains'
import Currency from './Component/Currency'
import Footer from './Component/Footer'
import Global from './Component/Global'


function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Global/>
    <Avail/>
    <Ramp/>
    <Chains/>
    <Currency/>
    <Footer/>
    </>
  )
}

export default App
