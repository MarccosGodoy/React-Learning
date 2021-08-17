import React, { useReducer } from "react";
import { CART_TYPES } from "../actions/shopingActions";
import {
  shopingInitialState,
  shopingReducer,
} from "../reducers/shopingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShopingCart = () => {
  //importacion del reducer y el estado inicial
  const [state, dispatch] = useReducer(shopingReducer, shopingInitialState);
  //Destructuracion del estado inicial
  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: CART_TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({type: CART_TYPES.REMOVE_ALL_FROM_CART, payload: id})
    }
    else{
      dispatch({type: CART_TYPES.REMOVE_ONE_FROM_CART, payload: id})
    }
  };

  const clearCart = () => {
    dispatch({ type: CART_TYPES.CLEAR_CART });
  };
  return (
    <div>
      <h2>Carro de compras</h2>
      <h3>Productos</h3>
      <article
        style={{
          display: "flex",
          padding: "1rem",
          margin: "1rem",
          boxShadow: "0 0 1rem #00000025 inset",
        }}
      >
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              data={product}
              addToCart={addToCart}
            />
          );
        })}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Clear Cart</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShopingCart;
