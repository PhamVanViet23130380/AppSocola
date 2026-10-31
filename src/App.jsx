import './App.css'
import { Route, Routes } from "react-router";
import Header from "./pages/components/Header.jsx";
import Footer from "./pages/components/Footer.jsx";
import Home from "./pages/Home/home.jsx";
import About from "./pages/About/About.jsx";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gioi-thieu" element={<About />} />
                <Route
                    path="*"
                    element={
                        <div className="app">
                            <h2>404 - Không tìm thấy trang</h2>
                        </div>
                }
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
