import { useState, useContext } from "react"
import { useParams } from "react-router-dom"

import products from "../data/products"
import CartContext from "../context/CartContext"

const ProductDetails = () => {
  const { id } = useParams()
  const {cart, setCart} = useContext(CartContext)

  const product = products.find(
    (product)=> product.id === Number(id)
  )

  const [quantity, setQuantity] = useState(1)
  return (
    <main className="px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2rem] text-gray-500">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-normal text-gray-900">
            {product.name}
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            ${product.price}
          </p>

          <p className="mt-8 max-w-lg text-sm leading-7 text-gray-600">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button 
              onClick={()=> setQuantity(Math.max(1, quantity -1))}
              className="w-10 h-10 border border-gray-300 text-gray-700 hover:border-gray-900 transition-colors"
            >
              -
            </button>

            <span className="w-6 text-center text-sm">
              {quantity}
            </span>

            <button 
              onClick={()=> setQuantity(quantity + 1)}
              className="w-10 h-10 border border-gray-300 text-gray-700 hover:border-gray-900 transition-colors"
            >
              +
            </button>
          </div>

          <button
            onClick={()=>{
              let productExists = false
              const newCart = cart.map(item => {
                if (item.product.id === product.id) {
                  productExists = true
                  return { ...item, quantity: item.quantity + quantity }
                }

                return item
              })

              productExists ? setCart(newCart): setCart([...cart, {product, quantity}])
            }}
            className="mt-6 w-full bg-gray-900 py-4 text-sm uppercase tracking-[0.15rem] text-white hover:bg-gray-800 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  )
}

export default ProductDetails
