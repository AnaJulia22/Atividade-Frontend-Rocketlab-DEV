import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShopingCartContext"
import { useNavigate } from "react-router-dom"


type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()

    const quantity = getItemQuantity(id)

    const nav = useNavigate();

    const navigate = () => {
        nav(`/about/${id}`)
    }


    return <Card>


        <Card.Img
            variant="top"
            src={imgUrl}
            height="340px"
            style={
                { objectFit: "cover" }} />


        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-4">{name}</span>
                <span className="text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div>
                <Button
                     className="w-100"
                     variant="outline-secondary"
                     style={{ gap: ".5rem", borderRadius: "20px" }}
                    onClick={navigate}>
                    Detalhes
                </Button>

            </div>

            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button
                        className="w-100 mt-3"
                        variant="outline-secondary"
                        style={{ gap: ".5rem", borderRadius: "20px" }}
                        onClick={() => increaseCartQuantity(id)}>
                        + Adicionar no carrinho
                    </Button>

                ) : (
                    <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                        <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                            <Button onClick={() => decreaseCartQuantity(id)} variant="secondary">-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span>
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)} variant="secondary">+</Button>
                        </div>
                        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)}>
                            Remove
                        </Button>
                    </div>
                )}
            </div>
        </Card.Body>
    </Card>
}