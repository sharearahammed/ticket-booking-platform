import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const ticket = action.payload;
      const exists = state.items.find(
        (item) => item.id === ticket.id && item.category === ticket.category
      );
      if (exists) {
        state.items = state.items.filter(
          (item) =>
            !(item.id === ticket.id && item.category === ticket.category)
        );
      } else {
        state.items.push(ticket);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
