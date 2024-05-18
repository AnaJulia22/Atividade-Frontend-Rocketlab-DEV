import { useParams } from "react-router-dom";
import storeItems from "../data/items.json"
import { Row, Col, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShopingCartContext";

export function About() {
    const { id } = useParams();
    const itemId = parseInt(id ?? "");
    const item = storeItems.find(i => i.id === itemId)
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()

    const quantity = getItemQuantity(itemId)


    if (!item) {

        return <div>Nenhum item encontrado com o ID {id}</div>;
    }

    return (
        <>
            <Row>
                <Col>
                    <img src={item.imgUrl} alt="{item.name}" height="300px"
                        style={
                            { objectFit: "cover" }} />
                </Col>
                <Col>
                    <h2>{item.name}</h2>
                    <p>{formatCurrency(item.price)}</p>
                    <h4>
                        <strong>
                            Detalhes
                        </strong>
                    </h4>
                    <p>{item.description}</p>


                    <div className="mt-auto">
                        {quantity === 0 ? (
                            <Button
                                className="w-100 mt-3"
                                variant="outline-secondary"
                                style={{ gap: ".5rem", borderRadius: "20px" }}
                                onClick={() => increaseCartQuantity(itemId)}>
                                + Adicionar no carrinho
                            </Button>

                        ) : (
                            <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                                <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                    <Button onClick={() => decreaseCartQuantity(itemId)} variant="secondary">-</Button>
                                    <div>
                                        <span className="fs-3">{quantity}</span>
                                    </div>
                                    <Button onClick={() => increaseCartQuantity(itemId)} variant="secondary">+</Button>
                                </div>
                                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(itemId)}>
                                    Remove
                                </Button>
                            </div>
                        )}
                    </div>

                </Col>

            </Row>


        </>
    );
}
