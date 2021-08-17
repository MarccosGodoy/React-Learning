import { CART_TYPES } from "../actions/shopingActions";

//Se simula base de datos
export const shopingInitialState = {
  products: [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 },
  ],
  cart: [],
};

export function shopingReducer(state, action) {
  switch (action.type) {
    case CART_TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //Se chequea si existe un item con el mismo id dentrodel carrito
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart //Si existe el item en el carrito
        ? {
            ...state, //Se copia el estado anterior
            cart: state.cart.map(
              (item) =>
                item.id === newItem.id //si hay dos items con el mismo id
                  ? { ...item, quantity: item.quantity + 1 } //Se suma  la cantidad del item
                  : item //Si no, se agrega el item al carro
            ),
          }
        : {
            ...state, //devuelve el estado
            cart: [...state.cart, { ...newItem, quantity: 1 }], //también devuelve cart y le agrega el nuevo item}
          };
    }
    case CART_TYPES.REMOVE_ONE_FROM_CART: {
      //Se busca el item a borrar
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            //Si la cantidad del item es mayor a 1
            ...state, //Se copia el estado
            cart: state.cart.map(
              (
                item //Se busca el item en cart y se disminuye la cantidad en 1
              ) =>
                item.id === action.payload
                  ? { ...item, quantity: item.quantity - 1 }
                  : item //De no ser mayor a 1 devuelve el item
            ),
          }
        : {
            //Si no es mayor a 1
            ...state, // se copia el estado para no perder los otros items del carro si es que hay
            cart: state.cart.filder((item) => item.id !== action.payload), //Se quita el item
          };
    }
    case CART_TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CART_TYPES.CLEAR_CART:
      return shopingInitialState;

    default:
      return state;
  }
}
