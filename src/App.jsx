import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { MainLayout } from "./Layout/MainLayout";
import { AllProducts } from "./Pages/AllProducts";
import { CartContextProvider } from "./Context/Context";
import { Cookies } from "./Pages/Cookies";
import { Return } from "./Pages/Return";
import { Shipping } from "./Pages/Shipping";
import { TermsAndConditions } from "./Pages/TermsAndConditions";
import { SingleProduct } from "./Pages/SingleProduct";
import { Cart } from "./Components/Cart/Cart";

function App() {
  return (
    <>
      <CartContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<AllProducts />} />
              <Route path="cart" element={<Cart />} />
              <Route path="cookies" element={<Cookies />} />
              <Route path="return" element={<Return />} />
              <Route path="shipping" element={<Shipping />} />
              <Route
                path="termsandconditions"
                element={<TermsAndConditions />}
              />
              <Route path="products/:id" element={<SingleProduct />} />
            </Route>
          </Routes>
        </Router>
      </CartContextProvider>
    </>
  );
}

export default App;
