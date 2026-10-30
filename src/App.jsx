import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/Home/home.jsx";


function App() {
  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={
              <div className="app">
                <h2>404 - Không tìm thấy trang</h2>
              </div>}/>
      </Routes>
  )
}

export default App
