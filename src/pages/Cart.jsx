import { useContext } from "react"
import CartContext from "../context/CartContext"

const Cart = () => {

  const { cart, setCart } = useContext(CartContext)
  return (
    <main className="px-6 py-16">
      <div className="max-ww-7xl mx-auto">
        <h1 className="text-5xl font-normal text-gray-900">
          Your Cart
        </h1>

        <div className="mt-12 space-y-8">
          {cart.map((item) => (
            <div key={item.product.id} className="flex gap-6">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-32 h-40 object-cover"
              />

              <div>
                <p className="text-xs uppercase tracking-[0.2rem] text-gray-500">
                  {item.product.category}
                </p>

                <h2 className="mt-2 text-xl text-gray-900">
                  {item.product.name}
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  ${item.product.price}
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>

                <button 
                  onClick={()=>{
                    const newCart = cart.filter(prod=>prod.product.id !== item.product.id)
                    setCart(newCart)
                  }}
                  className="h-10 w-24 bg-red-500 mt-3 text-sm text-white">
                  Remove Item
                </button>
              </div>
            </div>
            ))}
          </div>
      </div>
    </main>
  )
}

export default Cart
