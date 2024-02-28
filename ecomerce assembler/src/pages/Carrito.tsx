import { HomeProduct } from "../components/HomeProduct"
import { products } from "../data/products"
import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"
import { AuthContextType } from "../types"
import { Link } from "react-router-dom"


export const Carrito = () => {  

  const { signedIn }: AuthContextType = useContext(AuthContext)

  const filteredProducts = products.filter( product => signedIn.card?.includes(product.id))
  return (
    <div>
      <h1 className='font-bold text-xl mb-3'>YOUR CARD</h1>

      <div className="mx-auto">
        {
        
          filteredProducts.map(product => <HomeProduct key={product.id} product={product} />)
        }
        
      </div>
      
      <Link className="w-full mx-3 bg-black rounded text-white font-semibold px-4 py-2 text-center text-2xl" to='/buyingStage'>Process to payment</Link>
    </div>
  )
}
