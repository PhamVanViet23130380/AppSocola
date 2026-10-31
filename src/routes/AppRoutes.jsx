import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home/home.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="app">
              <h2>404 - Không tìm thấy trang</h2>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
