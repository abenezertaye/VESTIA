import { createContext, useState, useEffect } from "react"

const CartContext = createContext()

export function CartProvider({ children }){
  const [cart, setCart] = useState(()=>{
    try{
      return JSON.parse(localStorage.getItem('vestia-cart')) || []
    } catch(error){
      console.error("Failed to parse JSON: ", error.message);
    }
  })

  useEffect(()=>{
    localStorage.setItem('vestia-cart',JSON.stringify(cart))
  }, [cart])

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