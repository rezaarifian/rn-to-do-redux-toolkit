import React from 'react';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

// store
import {Provider} from 'react-redux';
import {store} from './src/store';

// screen
import TodoInput from './src/screen/ToDoInput';
import TodoList from './src/screen/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <Toast />
      <TodoInput />
      <TodoList />
    </Provider>
  );
};

export default App;
