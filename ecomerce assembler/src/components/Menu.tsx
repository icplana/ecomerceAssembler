import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"
import { AuthContextType } from "../types"


export const Menu = () => {
    const { signedIn, setSignedIn }: AuthContextType = useContext(AuthContext)

  return (
    <div className="absolute top-0 w-full h-full bg-slate-400">
        <ul className="mt-3 ml-2">
            <li className="font-bold text-2xl mt-2"><Link to='/'>Home</Link></li>
            {
                signedIn.status && <li className="font-bold text-2xl mt-2"><Link to='/card'>Card</Link></li>
            }
            {
                signedIn.status
                ? <li onClick = { () => { setSignedIn({status: false, id: null, card: null}) }} className="font-bold text-2xl mt-2">Log out</li>
                : <li className="font-bold text-2xl mt-2"><Link to='/login'>Log in</Link></li>    
            }

        </ul>
    </div>
  )
}
