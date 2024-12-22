import { useState } from 'react'
import './App.css'
import ImageUpload from './components/ImageUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Image Upload </h1>
      <ImageUpload/>
    </>
  )
}

export default App
