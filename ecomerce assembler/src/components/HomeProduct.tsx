import { Link } from "react-router-dom"
import { product } from "../types"
import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"
import { AuthContextType } from "../types"


export const HomeProduct = ({product}:{product:product}) => {

    const { addCard }: AuthContextType = useContext(AuthContext)

  return (
    <div className="w-10/12 mx-auto mb-5 rounded  border border-black px-2 py-2">
        
        <h3>{product.name}</h3>
        <img src={product.images[0]} alt={product.name + 'image'} />
        <p className="font-semibold">{product.brand}</p>
        <p className="text-sm mb-2">{product.description}</p>
        <p className="font-semibold mb-1">{product.price}€</p>
        <button
            onClick={ () => { addCard(product.id) }} 
            className="px-2 py-1 bg-orange-400 rounded mb-2 "
        >Add to Card</button>
        <Link to={'product' + product.id} className="px-2 py-1 bg-blue-400 rounded block w-fit">More information...</Link>
    
    </div>
  )
}
