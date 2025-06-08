import { useState } from 'react'

// import './App.css'

import Home from './components/Home'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Workflow from './components/Workflow'
import Price from './components/Price'
import Test from './components/Test'

function App() {


  return (
    <>
      <div>
        <Nav />
       <div className=" mx-auto w-screen pt-16 px-12  ">
         <Hero/>
         <Feature/>
         <Workflow/>
         <Price/>
         <Test/>
       </div>
      </div>
    </>
  )
}

export default App
