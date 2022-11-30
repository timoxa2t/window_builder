
import axios from "axios";

const baseUrl = "http://www.skloresursclient.org.ua/api/"

const GET = "GET"

function get(path, token = "", data = {}){
    const headers = {}
    if(token !== ""){
    }  
    return axios({
        method: GET,
        url: baseUrl + path,
        mode: 'cors',
        data,
        headers
    })
}

async function getBarcodeInfo(barcode){
    const res = await get(`details?barcode=${barcode}`)
    let jsonRes
    try{
        jsonRes = JSON.parse(res.data.trim())
    }
    catch(err){
        console.log(err)
    }
    return jsonRes
}

export const skloresursApi = {
    getBarcodeInfo
}
