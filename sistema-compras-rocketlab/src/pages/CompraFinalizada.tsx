import { useLocation } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'
import storeItems from '../data/items.json'

export function CompraFinalizada() {
    const location = useLocation()
    const { items } = location.state || { items: [] }

    return (
        <div>
            <div>
                <h1>Compra Finalizada &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                    </svg>
                </h1>
            </div>


            <ListGroup>
                {items.map(item => {
                    const storeItem = storeItems.find(i => i.id === item.id)
                    return (
                        <ListGroupItem key={item.id}>
                            {storeItem?.name} - {item.quantity} x {formatCurrency(storeItem?.price || 0)}
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
            <div className="ms-auto fw-bold fs-5">
                Total = {" "}
                {formatCurrency(
                    items.reduce((total, items) => {
                        const storeItem = storeItems.find(i => i.id === items.id)
                        return total + (storeItem?.price || 0) * items.quantity
                    }, 0)
                )}
            </div>
        </div>
    )
}
