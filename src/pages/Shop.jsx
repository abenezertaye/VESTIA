import { useState } from "react"
import products from "../data/products"
import ProductGrid from "../components/product/ProductGrid"

const Shop = () => {
  const [category, setCategory] = useState("All");
  const filteredProducts = 
    category === "All"
      ? products
      : products.filter((product)=> product.category === category) 
  return (
    <main className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/** Introduction Component */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.2rem] text-gray-500">
            collection
          </p>
          <h1 className="mt-3 text-5xl font-normal text-gray-900">
            Shop All
          </h1>

          <p className="mt-4 max-w-xl text-gray-600">
            Discover timeless pieces designed for everyday life.
          </p>
        </div>

        {/** Category Filters */}

        <div className="flex gap-6 border-b border-gray-200 mb-10">
          <button 
            onClick={() => setCategory("All")}
            className={`pb-3 text-sm ${category === "All" ? `text-gray-900 border-b border-gray-900`: `text-gray-500 hover:text-gray-900  transition-colors`}`}
          >
            All
          </button>

          <button 
            onClick={()=> setCategory("Outerwear")}
            className={`pb-3 text-sm ${category === "Outerwear" ? `text-gray-900 border-b border-gray-900`: `text-gray-500 hover:text-gray-900  transition-colors`}`}
          >
            Outerwear
          </button>

          <button 
            onClick={()=> setCategory("Knitwear")}
            className={`pb-3 text-sm ${category === "Knitwear" ? `text-gray-900 border-b border-gray-900`: `text-gray-500 hover:text-gray-900  transition-colors`}`}
          >
            Knitwear
          </button>

          <button 
            onClick={()=> setCategory("Trousers")}
            className={`pb-3 text-sm ${category === "Trousers" ? `text-gray-900 border-b border-gray-900`: `text-gray-500 hover:text-gray-900  transition-colors`}`}
          >
            Trousers
          </button>

          <button 
            onClick={()=> setCategory("Shirts")}
            className={`pb-3 text-sm ${category === "Shirts" ? `text-gray-900 border-b border-gray-900`: `text-gray-500 hover:text-gray-900  transition-colors`}`}
          >
            Shirts
          </button>
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </main>
  )
}

export default Shop