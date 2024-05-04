import { createSlice } from "@reduxjs/toolkit";

interface emailState {
  email: string;
}

const initialState = { email: "" } as emailState;

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    cacheEmail: (
      state,
      action: {
        payload: string;
        type: string;
      }
    ) => {
      return {
        ...state,
        email: action.payload,
      };
    },
  },
});

export const { cacheEmail } = loginSlice.actions;
