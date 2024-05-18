import { useState } from "react";
import InfoItem from "./InfoItem";

const ItemCard = ({ item }) => {
    const [visibleDetails, setVisibleDetails] = useState(false);
    {

        const handleClick = () => {
            setVisibleDetails(!visibleDetails)
        }

        return (
            <div key={item.id} id="album-info">
                <img onClick={handleClick} src={item.image} alt={item.item} />
                {visibleDetails ? <InfoItem id={item.id} /> : ""}
            </div>
        )
    }
}

export default ItemCard;