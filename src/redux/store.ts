import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./reducers/login";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    cacheEmail: loginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
