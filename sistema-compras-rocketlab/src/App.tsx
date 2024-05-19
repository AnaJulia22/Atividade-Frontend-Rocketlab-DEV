import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShopingCartContext"
import { About } from "./pages/About"
import { CompraFinalizada } from "./pages/CompraFinalizada"

function App() {
  
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/comprafinalizada" element={<CompraFinalizada />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
