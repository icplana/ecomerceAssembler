

import { useNavigate } from "react-router-dom"
import { users } from "../data/users"
import { useForm } from "../hooks/useForm"
import { AuthContext } from "../Contexts/AuthContext"
import { AuthContextType } from "../types"
import { useContext } from "react"



export const Login = () => {

    const { setSignedIn }: AuthContextType = useContext(AuthContext)

    const { onInputChange, email, password } = useForm({ email: '', password: '' })
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
        let a = true 
        users.map( user => {
            if ( user.email === email && user.password === password ){
                alert('logged in!')
                a = false
                navigate('/')
                setSignedIn({ status: true, id: user.id, card: user.cart})
                
            }})
        
        if ( a ) alert('email or password incorrect')
    }
  return (
    <div>
        
        <form onSubmit={ onSubmit } className="mb-4 w-full px-2">
            <div className=" mb-3">
                <label className="block w-10/12 font-semibold ">Email</label>
                <input 
                    type="email"
                    name="email"
                    value={ email }
                    onInput={ onInputChange }
                    className="rounded px-2 py-1 border border-black w-full"
                    placeholder="email@email.com"
                />
            </div>

            <div className="mb-3">
                <label className="block w-10/12 font-semibold ">Password</label>
                <input 
                    type="password"
                    name="password"
                    value={ password }
                    onInput={ onInputChange }
                    className="rounded px-2 py-1 border border-black w-full"
                    placeholder="******"
                />
            </div>

            <input className="bg-blue-700 text-white w-6/12 ms-1 rounded-md px-3 py-2 font-bold mb-2" type="submit" value="Login" />
        </form>
    </div>
  )
}
