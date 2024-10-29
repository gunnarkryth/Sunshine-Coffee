import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { MainLayout } from "./Layout/MainLayout";
import { AllProducts } from "./Pages/AllProducts";
import { CartContextProvider } from "./Context/Context";
import { Cookies } from "./Pages/Cookies";

function App() {
  return (
    <>
      <CartContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<AllProducts />} />
              <Route path="cookies" element={<Cookies />} />
            </Route>
          </Routes>
        </Router>
      </CartContextProvider>
    </>
  );
}

export default App;
