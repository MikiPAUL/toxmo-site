import Intro from "./components/intro"
import Product from "./components/product"
import WaitList from "./components/waitlist"
import Contact from "./components/contact"
import './App.css'
import React from "react"
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Intro />
      <main>
        <Product />
        <WaitList />
      </main>
      <Contact />
    </BrowserRouter>
  )
}

export default App