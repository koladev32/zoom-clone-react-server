import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {UserResponse} from "../../interfaces/user";
type State = {
  access: string | null;
  refreshToken: string | null;
  account: UserResponse | null;
};

const initialState: State = { access: null, refreshToken: null, account: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTokens(
      state: State,
      action: PayloadAction<{ access: string; refreshToken: string }>
    ) {
      state.refreshToken = action.payload.refreshToken;
      state.access = action.payload.access;
    },
    setAccount(state: State, action: PayloadAction<UserResponse>) {
      state.account = action.payload;
    },
    setLogout(state: State) {
      state.account = null;
      state.refreshToken = null;
      state.access = null;
    },
  },
});

export default authSlice;