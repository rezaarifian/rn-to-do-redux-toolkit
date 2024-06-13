import React, { useState } from 'react';
import {FlatList, TouchableOpacity, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';

// hooks
import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';
import { deleteTodo, toggleTodo } from '../../features/todos/todosSlice';

// component
import TodoItem from '../../components/TodoItem';
import ModalFilter from '../../components/ModalView';

// styles
import styles from './styles';

const TodoList: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  const todosState = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  const OnDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
    Toast.show({
      type: 'error',
      text1: 'Todo was deleted successfully',
      position: 'bottom'
    });
  };

  const OnToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
    Toast.show({
      type: 'success',
      text1: 'Todo was completed successfully',
      position: 'bottom'
    });
  };

  const filteredItems = todosState.filter(item => {
    if (filter === 'completed') return item.isComplete;
    if (filter === 'incompleted') return !item.isComplete;
    return true;
  });

  const selectFilter = (status: string) => {
    setModalVisible(false);
    setFilter(status);
  } 

  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonStyle,{backgroundColor: 'green'}]}
        activeOpacity={0.8}
        onPress={() => setModalVisible(true) }>
        <Text style={styles.buttonTextStyle}>Filter</Text>
      </TouchableOpacity>
      <ModalFilter visible={modalVisible} onConfirm={(status) => selectFilter(status)}/>
      <FlatList
        data={filteredItems}
        renderItem={({item}) => <TodoItem item={item} onDeleteTodo={OnDeleteTodo} onToggleTodo={OnToggleTodo}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;
