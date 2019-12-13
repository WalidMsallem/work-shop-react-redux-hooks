import {combineReducers} from 'redux'
import myAppReducer from './myApp.reducer'


const rootReducer = combineReducers({
   contacts: myAppReducer ,
})

export default rootReducer