import ProductGrid from "./ProductGrid.jsx"
import products from "../../data/products"
import { Link } from "react-router-dom"

function ProductSection(){
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2rem] text-gray-500">
            Featured Collection
          </p>

          <h2 className="mt-3 text-4xl font-normal text-gray-900">
            Essential Pieces
          </h2>
        </div>

        <ProductGrid products={products} />

        <Link to="/shop" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
          Shop All →
        </Link>
      </div>
    </section>
  )
}

export default ProductSection