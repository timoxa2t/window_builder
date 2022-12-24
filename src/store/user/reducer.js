import { createReducer } from "@reduxjs/toolkit";
import {
  currentUser,
  registerNewUser,
  setAddress,
  setEmail,
  setLastname,
  setFirstName,
  setPhone,
} from "./actions";


const defaultState = {
  firstName: "",
  lastName: "", 
  phone: "", 
  email: "", 
  address: ""
};

export const userReducer = createReducer(
  defaultState,
  {
    [setFirstName]: (state, { payload }) => {
      state.firstName = payload 
    },
    [setLastname]: (state, { payload }) => {state.lastName = payload},
    [setPhone]: (state, { payload }) => {state.phone = payload},
    [setEmail]: (state, { payload }) => {state.email = payload},
    [setAddress]: (state, { payload }) => {state.address = payload},
    [registerNewUser.fulfilled]: (state, { payload }) => {
      state.name = payload.user.name;
      state.email = payload.user.email;
      state.token = payload.token;
    },
    [currentUser.fulfilled]: (state, { payload }) => {
      state = payload;
    },
  }
);
