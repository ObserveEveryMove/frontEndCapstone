
import { combineReducers } from "redux"
import portReducer from "./portReducer"
import pomReducer from "./pomReducer"

const rootReducer = combineReducers({
  port: portReducer,
  pom: pomReducer, 
})

export default rootReducer