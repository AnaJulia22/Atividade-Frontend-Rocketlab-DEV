import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShopingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import storeItems from "../data/items.json"
import { CartItem } from "./CarItem"
import { useNavigate } from "react-router-dom"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen}: ShoppingCartProps) {
  const { clearCart, closeCart, cartItems } = useShoppingCart()

  const nav = useNavigate();
  
  const handleFinalizePurchase = () => {
    nav('/comprafinalizada', { state: { items: cartItems } })
    clearCart()
    closeCart()
  }

  const isCartEmpty = cartItems.length === 0

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>

      </Offcanvas.Header>
      <Offcanvas.Body>
        

        <Stack gap={3}>
          {cartItems.map(item => (<CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total = {" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
          <Button variant="outline-secondary" onClick={closeCart}>
            Continuar Comprando
          </Button>
          <Button variant="outline-warning" onClick={clearCart} disabled={isCartEmpty}>
            Limpar Carrinho
          </Button>
          <Button variant="outline-danger" onClick={ () => { clearCart(), closeCart() }} disabled={isCartEmpty}>
            Cancelar Compra
          </Button>
          <Button variant="outline-success" onClick={ handleFinalizePurchase } disabled={isCartEmpty}>
            Finalizar Compra
          </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>

  )
}