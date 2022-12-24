import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {glassReducer} from './glass/reducer'
import { barcodeReducer } from './details/reducer';
import { userReducer } from './user/reducer';


const rootReducer = combineReducers({
    glass: glassReducer,
    details: barcodeReducer,
    user: userReducer,
  })
  
export default createStore(rootReducer, applyMiddleware(thunk))
  // store.dispatch(getServicesAsync())