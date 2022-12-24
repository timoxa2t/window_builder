import { createAction, createAsyncThunk } from "@reduxjs/toolkit";


const SET_TYPE = "SET_TYPE"
const SET_NAME = "SET_NAME"
const SET_LASTNAME = "SET_LASTNAME"
const SET_PHONE = "SET_PHONE"
const SET_EMAIL = "SET_EMAIL"
const SET_ADDRESS = "SET_ADDRESS"

const LOGIN = "login"
const LOGOUT = "logout"
const GET_CURRENT = "currrent"



export const setType = createAction(SET_TYPE)
export const setFirstName = createAction(SET_NAME)
export const setLastname = createAction(SET_LASTNAME)
export const setPhone = createAction(SET_PHONE)
export const setEmail = createAction(SET_EMAIL)
export const setAddress = createAction(SET_ADDRESS)

export const registerNewUser = createAsyncThunk(
    SET_TYPE,
    async (type) => {
        try{
            
            return {}
        }
        catch(e){
            alert(e.message)
            return {
                user: {
                    name: "",
                    email: ""
                },
                token: ""
            }
        }
    }
  )

export const loginUser = createAsyncThunk(
    LOGIN,
    async (user) => {
        try{
            // const response = await swaggerApi.loginUser(user)
            // localStorage.token = response.data.token
            // localStorage.email = response.data.user.email
            // return response.data
        }
        catch(e){
            alert(e.message)
            return {
                user: {
                    name: "",
                    email: ""
                },
                token: ""
            }
        }
    }
  )

export const logoutUser = createAsyncThunk(
    LOGOUT,
    async ({token, callback}) => {
        // const response = await swaggerApi.logoutUser(token)
        // localStorage.token = ''
        // localStorage.email = ''
        // callback()
        // return response.data
    }
)

export const currentUser = createAsyncThunk(
    GET_CURRENT,
    async (user) => {
        // const response = await swaggerApi.currentUser(user)
        // return response.data
    }
)
