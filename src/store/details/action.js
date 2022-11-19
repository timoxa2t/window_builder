import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import {skloresursApi} from "../../services/skloresurs"


const GET_INFO = "GET_INFO"



export const getBarcodeInfo = createAsyncThunk(
    GET_INFO,
    async ({barcode}) => {
        const response = await skloresursApi.getBarcodeInfo(barcode)
        return response.data
    }
)
