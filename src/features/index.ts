import {combineReducers} from 'redux';
import todosReducer from "./todos/todosSlice";

const appReducer = combineReducers({
    todos: todosReducer
  });
  
  export default appReducer;