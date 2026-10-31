import { Outlet } from "react-router";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
