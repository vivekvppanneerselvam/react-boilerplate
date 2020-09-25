import { combineReducers } from 'redux'
import HomeReducer from '../../modules/home/reducer'

export const rootReducer = combineReducers({
    HomeReducer: HomeReducer   
})