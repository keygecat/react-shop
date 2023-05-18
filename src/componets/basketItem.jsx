function BasketItem(props) {
    
    const {
        id, 
        name, 
        price, 
        quantity, 
        removeFromBasket = Function.prototype,
        incQuantity =  Function.prototype,
        decQuantity =  Function.prototype,
    } = props;

    return (
        <ul className="collection deep-purple">
            <li className="collection-item">
                {name}{" "} 
                <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i>
                X 
                {quantity} 
                <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i>{" "}
                = {price * quantity}{" "} руб.
                <span className="secondary-content" onClick={() => removeFromBasket(id)}>
                    <i className="material-icons basket-delete">clear</i>
                </span>
            </li>
        </ul>
    );
}

export { BasketItem };