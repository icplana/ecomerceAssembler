import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Menu } from "./components/Menu"
import { Carrito } from "./pages/Carrito"
import { Login } from "./pages/Login"
import { useContext } from "react"
import { AuthContext } from "./Contexts/AuthContext"
import { AuthContextType } from "./types"
import { BuyingStage } from "./pages/BuyingStage"
import { FinishPurchase } from "./pages/FinishPurchase"
import { FullProduct } from "./components/FullProduct"



function App() {

  const { signedIn }: AuthContextType = useContext(AuthContext)
  


  return (
    <>
      <Header/>
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<Menu />} path="/menu" />
        <Route element={<FullProduct productId="1"/>} path="/product1" />
        <Route element={<FullProduct productId="2"/>} path="/product2" />
        <Route element={<FullProduct productId="3"/>} path="/product3" />
        {
          signedIn.status
          ?<Route element={<Carrito />} path="/card" />
          :<Route element={<Login />} path="/card" />
        }
        {
          signedIn.status
          ?<Route element={<BuyingStage />} path="/buyingStage" />
          :<Route element={<Login />} path="/buyingStage" />
        }
        {
          signedIn.status
          ?<Route element={<FinishPurchase />} path="/finishPurchase" />
          :<Route element={<Login />} path="/finishPurchase" />
        }
        <Route element={<Login />} path="login" />
      </Routes>
    </>
  )
}

export default App
