import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  alert: "",
};

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    createAlert(state, action: PayloadAction<string>) {
        state.alert = action.payload;
    },
    clearAlert(state) {
        state.alert = "";
    },
  },
});

export const { createAlert, clearAlert } = alertSlice.actions;



export default alertSlice.reducer;
