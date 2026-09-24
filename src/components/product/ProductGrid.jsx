import ProductCard from "../product/ProductCard.jsx"

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
      {products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ProductGrid