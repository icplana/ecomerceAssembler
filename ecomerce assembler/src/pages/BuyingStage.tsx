import { products } from "../data/products"
import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"
import { AuthContextType } from "../types"
import { BuyingProduct } from "../components/BuyingProduct"
import { Link } from "react-router-dom"
import { useForm } from "../hooks/useForm"

export const BuyingStage = () => {

  const { onInputChange, name, Address, City, ZIPCode, Country } = useForm({ name: '', Address: '', City: '', ZIPCode: '', Country:'' })
  const { signedIn }: AuthContextType = useContext(AuthContext)

  const filteredProducts = products.filter( product => signedIn.card?.includes(product.id))
  let totalPrice:number = 0
  filteredProducts.forEach(product => {
  
    totalPrice = totalPrice + Number(product.price)
  })
  return (
    <div className="px-1">
      <h1 className="text-2xl font-semibold">Finish your purchase.</h1>
      <h3 className="underline text-xl">Items</h3>
      <ul>
      {
        filteredProducts.map(product => <BuyingProduct key={product.id} product={product} />)
      }
      </ul>
      <div className='flex justify-between mt-1 mb-2'>
        <span className='text-sm font-semibold'>Total: </span>
        <span className='font-bold'>{ totalPrice }€</span>
    </div>

    <p>Payment options</p>
    <ul className="flex gap-2">
      <li><img className="w-20" src="../src/assets/images/payment1.png" alt="" /></li>
      <li><img className="w-20" src="../src/assets/images/payment2.png" alt="" /></li>
      <li><img className="w-20" src="../src/assets/images/payment3.png" alt="" /></li>
      <li><img className="w-20" src="../src/assets/images/payment4.png" alt="" /></li>
    </ul>

      <form action="" className="mb-8">
        <h3 className="text-2xl">Shipping Addres</h3>
        
        <label htmlFor="">Full name</label>
        <input 
          className="block border border-black rounded px-2 py-1 w-full" 
          type="text"
          name="name"
          value={name} 
          onInput={onInputChange}
        />

        <label htmlFor="">Address</label>
        <input className="block border border-black rounded px-2 py-1 w-full" type="text" name="Address" value={Address} onInput={onInputChange}/>

        <label htmlFor="">City</label>
        <input className="block border border-black rounded px-2 py-1 w-full" type="text" name="City" value={City} onInput={onInputChange}/>

        <label htmlFor="">ZIP Code</label>
        <input className="block border border-black rounded px-2 py-1 w-full" type="text" name="ZIPCode" value={ZIPCode} onInput={onInputChange}/>

        <label htmlFor="">Country</label>
        <input className="block border border-black rounded px-2 py-1 w-full" type="text" name="Country" value={Country} onInput={onInputChange}/>

      </form>
      {
      ( name !== '' && Address !== '' && City !== '' && ZIPCode !== '' && Country !== '' )        
      ?<Link to='/finishPurchase' className="rounded border border-black bg-black text-white font-bold px-4 py-2 text-xl">Complete purchase</Link>
      :<button className="rounded border border-black bg-gray-500 text-white font-bold px-4 py-2 text-xl mt-0">Complete purchase</button>
      }
    </div>
  )
}
