import { createReducer } from "@reduxjs/toolkit";
import {
  currentUser,
  registerNewUser,
  setType
} from "./actions";

import monosklo from "../../img/monosklo.png";
import triplex from "../../img/triplex.png";
import odnosklo from "../../img/odnosklo.png";
import dvosklo from "../../img/dvosklo.png";
import trysklo from "../../img/trysklo.png";


const GLASS = "type_glass";
const SPACER = "type_spacer";
const FILM = "type_film";

const defaultState = {
  windowTypes: [
    {
      id: "mono_glass",
      name: "Моноскло",
      img: monosklo,
      recipe: [GLASS]
    },
    {
      id: "triplex",
      name: "Тріплекс",
      img: triplex,
      recipe: [GLASS, FILM, GLASS]
    },
    {
      id: "glass_packet",
      name: "Однокамерний склопакет",
      img: odnosklo,
      recipe: [GLASS, SPACER, GLASS]
    },
    {
      id: "double_glass_packet",
      name: "Двокамерний склопакет",
      img: dvosklo,
      recipe: [GLASS, SPACER, GLASS, SPACER, GLASS]
    },
    {
      id: "triple_glass_packet",
      name: "Трикамерний склопакет",
      img: trysklo,
      recipe: [GLASS, SPACER, GLASS, SPACER, GLASS, SPACER, GLASS]
    },
  ],
  selectedType:  {
    id: "mono_glass",
    name: "Моноскло",
    img: monosklo,
    recipe: [GLASS]
  }
};

export const glassReducer = createReducer(
  defaultState,
  {
    [setType]: (state, { payload }) => {
      const selected = state.windowTypes.find(type => type.id === payload)
      state.selectedType = selected;
    },
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
