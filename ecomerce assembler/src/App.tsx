import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"



function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route element={<Home />} path="/"/>
      </Routes>
    </>
  )
}

export default App
