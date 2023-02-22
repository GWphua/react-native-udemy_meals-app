import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favourites";

const store = configureStore({
  reducer: {
    favouriteMeals: favouritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
