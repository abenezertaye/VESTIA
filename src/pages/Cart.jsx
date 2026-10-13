import { useContext } from "react"
import CartContext from "../context/CartContext"

const Cart = () => {

  const { cart, setCart, updateQuantity } = useContext(CartContext)

  const subtotal = cart.reduce((accumulator, item)=>{
     return accumulator + (item.product.price * item.quantity)
  },0)
  
  return (
    <main className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
           <h1 className="text-5xl font-normal text-gray-900">
              Your Cart
           </h1>
 
           <div className="w-full max-w-md h-50 bg-gray-200 rounded-3xl px-6 py-6">
              <div className="flex justify-between items-center mb-5">
                <h2 className="font-normal text-3xl">Subtotal</h2>
                <p className="">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <p className="text-base">Shipping</p>
                <p className="text-xs">Calculated at Checkout</p>
              </div>     
              <button className="w-full h-12 font-medium bg-gray-900 text-white mt-4 transition-colors duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-100">Checkout</button>
           </div>
        </div>
       

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
                    onClick={()=>{updateQuantity(item.product.id, -1)}}
                  className="w-10 h-8 border border-gray-300 text-gray-700 hover:border-gray-900 transition-colors"
                  >
                    -
                  </button>

                  <p className="mt-2 text-sm text-gray-600">
                    {item.quantity}
                  </p>

                  <button 
                      onClick={()=>{updateQuantity(item.product.id, 1)}}
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
