import {createSlice} from '@reduxjs/toolkit';
import {Todo} from '../../interfaces/interface';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    // Add Todo
    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: action.payload.id,
        name: action.payload.name,
        isComplete: false,
      };
      state.push(newTodo);
    },
    // Delete Todo
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    // Toggle Todo
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) todo.isComplete = !todo.isComplete;
    },
  },
});

// Export Actions
export const {addTodo, deleteTodo, toggleTodo} = todosSlice.actions;

// Export Reducer
export default todosSlice.reducer;
