import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShopingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const { increaseCartQuantity } = useShoppingCart()
  const { decreaseCartQuantity } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
        <Button
        variant="link-primary"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </Button>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => decreaseCartQuantity(item.id)}
      >
        &#45;
      </Button>
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => increaseCartQuantity(item.id)}
      >
         &#43;
      </Button>
    </Stack>
  )
}