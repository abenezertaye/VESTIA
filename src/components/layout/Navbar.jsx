import { Heart, Search, ShoppingBag, User } from "lucide-react"
import { Link } from "react-router-dom"

function Navbar(){
  return (
    <nav className="relative w-full h-20 bg-cyan-900 text-white
    flex justify-between items-center px-8">
      <div>
        <h1 className="text-2xl font-bold">VÉSTIA</h1>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-7">
        <Link to="/" className="text-gray-300 hover:text-gray-50 transition-colors duration-200">Home</Link>
        <Link to="/shop" className="text-gray-300 hover:text-gray-50 transition-colors duration-200">Shop</Link>
        <Link to="/about" className="text-gray-300 hover:text-gray-50 transition-colors duration-200">About</Link>
        <Link to="/contact" className="text-gray-300 hover:text-gray-50 transition-colors duration-200">Contact</Link>
      </div>

      <div className="absolute right-8 flex items-center gap-5">
        <button className="text-gray-300 hover:text-white 
        transition-colors duration-200 cursor-pointer" aria-label="Search">
          <Search size={20} strokeWidth={1.8} />
        </button>
        <button aria-label="Wishlist" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
          <Heart size={20} strokeWidth={1.8}/>
        </button>
        <button aria-label="Cart" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
          <ShoppingBag size={20} strokeWidth={1.8}/>
        </button>
        <button aria-label="Account" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
          <User size={20} strokeWidth={1.8}/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar