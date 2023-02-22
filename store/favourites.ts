import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouritesPayload {
  id: string;
}

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    ids: [] as string[],
  },
  reducers: {
    addFavourite: (state, action: PayloadAction<FavouritesPayload>) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action: PayloadAction<FavouritesPayload>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
