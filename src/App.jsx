import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './contador/Contador'
import Todolist from './todolist/todolist'

function App() {

  return (
    <>
      <Todolist />
      {/* <Contador /> */}
    </>
  )
}

export default App
