
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Collections from "../pages/Collections/Collections.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import Address from "../pages/Profile/Address.jsx";
import ProductDetail from "../pages/ProductDetail/ProductDetail.jsx";
import Products from "../pages/Products/Products.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/gioi-thieu" element={<About />} />
                <Route path="/lien-he" element={<Contact />} />
                <Route path="/bo-suu-tap" element={<Collections />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/address" element={<Address/>}/>
                <Route path="/san-pham" element={<Products />} />
                <Route path="/san-pham/:slug" element={<ProductDetail />}/>

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
