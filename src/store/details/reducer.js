import { createReducer } from "@reduxjs/toolkit";
import {
  getBarcodeInfo
} from "./action";


const defaultState = {
  components: []
}

export const barcodeReducer = createReducer(
  defaultState,
  {
    [getBarcodeInfo.fulfilled]: (state, { payload }) => {
      state.components = payload;
    },
  }
);
