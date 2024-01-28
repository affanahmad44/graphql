import { createStore,combineReducers } from 'redux';
import {APIReducer} from './reducers/apiReducer.js'

// Create store
   const store = createStore(APIReducer);
   console.log(store);
 
 
export default store;
 

    
       
 
 
 
 