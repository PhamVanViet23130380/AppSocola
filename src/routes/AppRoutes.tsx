import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Collections from "../pages/Collections/Collections";
import Profile from "../pages/Profile/Profile";
import Address from "../pages/Profile/Address";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Products from "../pages/Products/Products";
import ChangePassword from "../pages/Profile/ChangePassword";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Checkout from "../pages/Checkout/Checkout";
import OrderSuccess from "../pages/Checkout/Success";

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
                <Route path="/profile/password" element={<ChangePassword />}/>
                <Route path="/san-pham" element={<Products />} />
                <Route path="/san-pham/:slug" element={<ProductDetail />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/order" element={<Checkout />} />
                <Route path="/order/success" element={<OrderSuccess />} />

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
