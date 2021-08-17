import React from 'react'

const CartItem = ({data, deleteFromCart}) => {
    let {id, name, price, quantity} = data
    return (
        <div>
            <h4>{name}</h4>
            <h5>${price}.00 x {quantity} = ${price * quantity}.00</h5>
            <button onClick={()=>deleteFromCart(id)}>Delete one</button>
            <button onClick={()=>deleteFromCart(id, true)}>Delete all</button>
        </div>
    )
}

export default CartItem
