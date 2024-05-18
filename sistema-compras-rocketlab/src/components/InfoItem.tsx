import storeItems from "../data/items.json"

const InfoItem = ({ id }) => {
    const item = storeItems.find(i => i.id === id)


    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.imgUrl}</p>
        </div>
    )
};

export default InfoItem;