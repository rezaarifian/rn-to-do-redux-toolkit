import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
import React, {useState} from 'react';
import uuid from 'react-native-uuid'
import Toast from 'react-native-toast-message';

// hooks
import { useAppDispatch } from '../../hooks/storeHook';
import { addTodo } from '../../features/todos/todosSlice';

// styles
import styles from './styles';
  
const TodoInput: React.FC = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useAppDispatch();

  const onSubmitTodo = () => {
    if (todo.trim() === '') {
      Toast.show({
        type: 'info',
        text1: 'Please input field',
        text2: 'Todo cannot be empty',
        position: 'bottom'
      });
      return;
    }
    const newTodo = {
      id: uuid.v4(),
      name: todo.trim(),
      isCompleted: false,
    };
    Toast.show({
      type: 'success',
      text1: `${newTodo.name} todo was added successfully`,
      position: 'bottom'
    });

    dispatch(addTodo(newTodo));

    setTodo('');
  };

  return (
    <View>
      <Text style={styles.textStyle}>Todo App</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Add Your Todo..."
        value={todo}
        onChangeText={text => setTodo(text)}
      />
      <TouchableOpacity
        style={[styles.buttonStyle,{backgroundColor: !todo ? 'grey' : 'green'}]}
        activeOpacity={0.8}
        onPress={onSubmitTodo}>
        <Text style={styles.buttonTextStyle}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;
  