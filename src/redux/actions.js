export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const RECEIVE_CART = "RECEIVE_CART";
export const REMOVE_STOCK = "REMOVE_STOCK";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const RETURN_ITEM = "RETURN_ITEM";
export const PUT_BACK = "PUT_BACK";
export const GET_ITEMS_IN_CART = "GET_ITEMS_IN_CART";
export const CHECKOUT = "CHECKOUT";

export function checkout() {
  return { type: CHECKOUT };
}

export function putBack(id, amount) {
  return { type: PUT_BACK, id, amount };
}

export function returnItem(id, amount) {
  return { type: RETURN_ITEM, id, amount };
}

export function getItemsInCart() {
  return { type: GET_ITEMS_IN_CART };
}

export function updatePrice(id) {
  return { type: UPDATE_PRICE, id };
}

export function receiveProducts(products) {
  return { type: RECEIVE_PRODUCTS, products };
}

export function receiveCart(products) {
  return { type: RECEIVE_CART, products };
}

export function addToCart(id, amount) {
  return { type: ADD_TO_CART, id, amount };
}

export function removeStock(id, amount) {
  return { type: REMOVE_STOCK, id, amount };
}
