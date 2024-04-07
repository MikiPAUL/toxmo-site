import Intro from "./components/intro"
import Product from "./components/product"
import WaitList from "./components/waitlist"
import Contact from "./components/contact"
import './App.css'
import React from "react"

function App() {
  return (
    <>
      <Intro />
      <main>
        <Product />
        <WaitList />
      </main>
      <Contact />
    </>
  )
}

export default App