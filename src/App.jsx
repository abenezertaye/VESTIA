import { Routes, Route} from "react-router-dom"

/** Pages */
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails"

/** Compoenents */
import FeaturedCollection from "./components/layout/FeaturedCollection"
import Hero from "./components/layout/Hero"
import Navbar from "./components/layout/Navbar"
import ProductSection from "./components/product/ProductSection"

function App(){
  return (
    <>
      <Navbar />

      <Routes>
        <Route 
          path="/"
          element={
            <>
              <Hero />
              <FeaturedCollection />
              <ProductSection />
            </>
          }
        />

        <Route 
          path="/shop"
          element={<Shop />}
        />

        <Route 
          path="/shop/:id"
          element={<ProductDetails />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
    
  )
}

export default App