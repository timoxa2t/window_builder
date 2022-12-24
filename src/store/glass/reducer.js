import { createReducer } from "@reduxjs/toolkit";
import {
  setType
} from "./actions";

import monosklo from "../../img/monosklo.png";
import triplex from "../../img/triplex.png";
import odnosklo from "../../img/odnosklo.png";
import dvosklo from "../../img/dvosklo.png";
import trysklo from "../../img/trysklo.png";
import { FILM, GLASS, SPACER } from "../../utilities";


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
  }
);
