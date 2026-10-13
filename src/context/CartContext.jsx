import { createContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }){
  const [cart, setCart] = useState([])

  function updateQuantity(productId, change){
    setCart(currentCart=>{
      return currentCart.map(item=>{
        if (item.product.id === productId){
          return {...item, quantity: Math.max(1, item.quantity + change)}
        }
        return item
      })
    })
  }

  return (
    <CartContext.Provider value={{ cart, setCart, updateQuantity }}>
      { children }
    </CartContext.Provider>
  )

}

export default CartContext