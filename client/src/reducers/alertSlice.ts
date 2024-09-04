import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Severity = "success" | "error";

export interface AlertState {
    alert: string,
    severity: Severity
}

const initialState: AlertState = {
    alert: "",
    severity: "success"
} 

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    createAlert(state, action: PayloadAction<AlertState>) {
        state.alert = action.payload.alert;
        state.severity = action.payload.severity
    },
    clearAlert(state) {
        state.alert = "";
    },
  },
});

export const { createAlert, clearAlert } = alertSlice.actions;



export default alertSlice.reducer;
