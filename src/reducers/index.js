import {combineReducers} from 'redux'
import chocolateReducer from './choclateReducer'
import bookReducer from './bookReducer'
import cricketReducer from './cricketReducer'

export const rootReducer = combineReducers(
{
  C1 : chocolateReducer,
  B1 : bookReducer,
  CR : cricketReducer
})

