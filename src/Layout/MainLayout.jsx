import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Cart } from "../Components/Cart/Cart";
import { Footer } from "../Components/Footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Outlet />
      <Footer />
    </>
  );
};
