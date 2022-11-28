import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import {skloresursApi} from "../../services/skloresurs"
import { TESTING } from "../../utilities";
import barcodeTest from "../../barcodeTest.json"

const GET_INFO = "GET_INFO"



export const getBarcodeInfo = createAsyncThunk(
    GET_INFO,
    async ({barcode}) => {

        const response = TESTING ? barcodeTest : await skloresursApi.getBarcodeInfo(barcode)
        return response
    }
)
