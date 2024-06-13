import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoItem from '../components/TodoItem';

jest.mock('react-native-reanimated', () => ({
  ...jest.requireActual('react-native-reanimated/mock'),
  useSharedValue: jest.fn(() => ({ value: 0 })),
  useAnimatedStyle: jest.fn((callback) => callback()),
  withTiming: jest.fn((value) => value),
  withRepeat: jest.fn((animation) => animation),
  withSequence: jest.fn((...animations) => animations),
}));

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
jest.mock('../../assets/checked.svg', () => 'Checked');
jest.mock('../../assets/unchecked.svg', () => 'Unchecked');

describe('TodoItem', () => {
  const item = {
    id: '1',
    name: 'Tugas pertama',
    isComplete: false,
  };

  const onDeleteTodo = jest.fn();
  const onToggleTodo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with incomplete item', () => {
    const { getByTestId, queryByTestId } = render(
      <TodoItem item={item} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
    );

    expect(getByTestId('container-todo-item')).toBeTruthy();
    expect(getByTestId('unchecked-todo-item')).toBeTruthy();
    expect(queryByTestId('checked-todo-item')).toBeNull();
    expect(getByTestId('text-incompleted-item')).toBeTruthy();
    expect(queryByTestId('text-completed-item')).toBeNull();
  });

  it('renders correctly with complete item', () => {
    const completedItem = { ...item, isComplete: true };

    const { getByTestId, queryByTestId } = render(
      <TodoItem item={completedItem} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
    );

    expect(getByTestId('container-todo-item')).toBeTruthy();
    expect(getByTestId('checked-todo-item')).toBeTruthy();
    expect(queryByTestId('unchecked-todo-item')).toBeNull();
    expect(queryByTestId('text-incompleted-item')).toBeNull();
    expect(getByTestId('text-completed-item')).toBeTruthy();
  });

  it('calls onToggleTodo when the item is pressed', () => {
    const { getByTestId } = render(
      <TodoItem item={item} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
    );

    fireEvent.press(getByTestId('toggle-todo-item'));
    expect(onToggleTodo).toHaveBeenCalledWith(item.id);
  });

  it('calls onDeleteTodo when the trash icon is pressed', () => {
    const { getByTestId } = render(
      <TodoItem item={item} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
    );

    fireEvent.press(getByTestId('trash-todo-item'));
    expect(onDeleteTodo).toHaveBeenCalledWith(item.id);
  });
});
