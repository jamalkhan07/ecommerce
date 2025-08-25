import { createSlice } from "@reduxjs/toolkit";
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: () => {
      const item = action.payload;

      const existingItem = state.cartItems.find((x) => x._id === item._id);

      if (existingItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existingItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      //calculate items price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * qty, 0)
      );

      //calculate shipping price
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

      //   calcultate tax price
      state.taxPrice = addDecimals(
        Number((0.15 * state.itemsPrice).toFixed(2))
      );
      //calculate total price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCard } = cartSlice.actions;
export default cartSlice.reducer;
