import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="app">
        <h1>AppSocola</h1>
        <p>Website thương mại điện tử bán socola</p>
        <button>Khám phá sản phẩm</button>
      </div>
  )
}

export default App
