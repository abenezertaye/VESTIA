import { createContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }){
  const [cart, setCart] = useState([])

  function removeFromCart(productId){
    setCart(currentCart=>{
      return currentCart.filter(item=>item.product.id !== productId)
    })
  }

  function addToCart(product,quantity){
    setCart(currentCart=>{
      let productExists = false
      const newCart = currentCart.map(item=>{
        if (item.product.id === product.id){
          productExists = true
          return {...item, quantity: item.quantity + quantity}
        }
        return item
      })

      if (productExists) {
        return newCart
      }else{
        return [...currentCart, {product, quantity}]
      }
    })
  }

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
    <CartContext.Provider value={{ cart, setCart, updateQuantity,removeFromCart, addToCart }}>
      { children }
    </CartContext.Provider>
  )

}

export default CartContext