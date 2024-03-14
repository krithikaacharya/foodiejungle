import {combineReducers}  from 'redux'
import {createStore, applyMiddleware}  from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {getAllPizzasReducer} from './reducers/pizzaReducers';
import { thunk } from 'redux-thunk';
// import { cartReducer } from './reducers/cartReducer';
import { json } from 'express';



const finalReducer =combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    // cartReducer:cartReducer
})

// const cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

const initialState={
  
    // cartItems:cartItems
}

const composeEnhancers =composeWithDevTools({}) 
const store =createStore( finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store