
import { ReactNode, useState } from "react"
import { AuthContext } from "./AuthContext"




export const AuthProvider = ({ children }:{ children:ReactNode}) => {

  const [signedIn, setSignedIn ] = useState( {status: false, id: null, card: null} )
  
  const addCard = (x:string) => {
    if ( signedIn.card?.includes(x)) return
    setSignedIn({
      status: signedIn.status,
      id: signedIn.id,
      card:[...signedIn.card, x]
    })
  }
  return (
    <AuthContext.Provider value={ { signedIn, setSignedIn, addCard } }>
        { children }
    </AuthContext.Provider>
  )
}