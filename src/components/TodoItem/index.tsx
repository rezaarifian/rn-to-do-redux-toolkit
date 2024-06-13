import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

// styles
import styles from './styles';

// assets
import Checked from '../../assets/checked.svg';
import Unchecked from '../../assets/unchecked.svg';

// types
import { Todo } from '../../interfaces/interface';

type Props = {
    item: Todo
    onDeleteTodo: (id: string) => void;
    onToggleTodo: (id: string) => void;
};

const TodoItem: React.FC<Props> = ({item, onDeleteTodo, onToggleTodo}) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 });
    translateY.value = withTiming(0, { duration: 500 });
  }, []);

  const animatedChecked = () => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0, { duration: 500 }), // Fade out
        withTiming(1, { duration: 500 })  // Fade in
      ),
    );
  }

    return (
      <Animated.View testID={"container-todo-item"} style={[styles.itemContainer, animatedStyles]}>
        <TouchableOpacity testID={"toggle-todo-item"} onPress={() => {
            animatedChecked();
            onToggleTodo(item.id);
          }
        }>
          {item.isComplete ? (
            <Checked testID={"checked-todo-item"} style={styles.itemCheckedIcon} height={20} /> 
          ) :
            (<Unchecked testID={"unchecked-todo-item"} height={20} />)
          }
        </TouchableOpacity>
        <View testID={"container-text-todo-item"} style={{marginLeft: 20, width: '70%'}}>
          {item.isComplete ? (
            <Text testID={"text-completed-item"} numberOfLines={2} style={styles.lineThrough}>{item.name}</Text>
          ) : (
            <Text testID={"text-incompleted-item"} style={styles.itemText}>{item.name}</Text>
          )}
        </View>
          <View style={styles.containerTrash}>
            <Icon
              testID={"trash-todo-item"}
              name="trash-outline"
              size={25}
              color="#333"
              onPress={() => onDeleteTodo(item.id)}
              style={{marginLeft:  'auto'}}
            />
          </View>
      </Animated.View>
    );
};

export default TodoItem;
