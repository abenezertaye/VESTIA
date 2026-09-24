import { Routes, Route} from "react-router-dom"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
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
      </Routes>
    </>
    
  )
}

export default App