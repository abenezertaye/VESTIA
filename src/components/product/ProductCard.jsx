import{ Link } from"react-router-dom"

function ProductCard({ product }){
  return (
    <Link to={`/shop/${product.id}`} className="group block">
      <div className="relative aspect-3/4 bg-gray-100 overflow-hidden">
        <img 
          src={product.image}
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

      </div>

      <div className="mt-4">
        <p className="text-xs uppercase tracking-[0.15rem] text-gray-500">
          {product.category}
        </p>

        <h3 className="mt-2 text-xl font-normal text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          ${product.price}
        </p>
      </div>
    </Link>
  )
}


export default ProductCard