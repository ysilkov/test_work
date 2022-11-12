import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "./listReducer";

const store = configureStore({
  reducer: {
    list: ListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;