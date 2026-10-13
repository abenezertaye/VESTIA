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
                {/** Add or take items from cart */}
                <div className="flex gap-2 mt-2 text-sm text-gray-600">
                  <button 
                    onClick={()=>{
                      const newCart = cart.map((prod)=>{
                        if(prod.product.id === item.product.id){
                          return {...prod, quantity: Math.max(1, prod.quantity - 1)}
                        }

                        return prod
                      })

                      setCart(newCart)
                    }}
                  className="w-10 h-8 border border-gray-300 text-gray-700 hover:border-gray-900 transition-colors"
                  >
                    -
                  </button>

                  <p className="mt-2 text-sm text-gray-600">
                    {item.quantity}
                  </p>

                  <button 
                      onClick={()=>{
                      const newCart = cart.map((prod)=>{
                        if(prod.product.id === item.product.id){
                          return {...prod, quantity: prod.quantity + 1}
                        }

                        return prod
                      })

                      setCart(newCart)
                    }}
                    className="w-10 h-8 border border-gray-300 text-gray-700 hover:border-gray-900 transition-colors">
                    +
                  </button>
                </div>
                

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
