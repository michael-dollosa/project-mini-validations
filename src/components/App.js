import React, { useState, useEffect } from 'react'
import { getValidation } from './helper'

import './App.scss'
const App = () => {
  //states
  const [validation, setValidation] = useState("Do you need validation?")
  const [toggle, setToggle] = useState(false)

  //onClick fetch data
  const seekValidation = async () => {
    const data = await getValidation()
    setValidation(data)
    setToggle(true)
  }

  //button label
  const buttonLabel = toggle ? "I need more validation" : "I need validation"

  console.log(validation)
  return(
    <div className="container">
      <main className="header">
        {validation}
      </main>

      <section className="footer">
        <button onClick={seekValidation}>
          {buttonLabel}
        </button>
        <footer>
          &#169; Christian Michael Dollosa || Credits to complimentr.com API
        </footer>
      </section>
    </div>
  )
}

export default App