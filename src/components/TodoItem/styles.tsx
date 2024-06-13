import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
      },
      itemText: {
        fontSize: 16,
        color: '#333',
      },
      lineThrough: {
        textDecorationLine: 'line-through',
        fontSize: 16,
        color: '#333',
      },
      itemCheckedIcon: {
        shadowColor: '#000000',
        shadowOpacity: 0.14,
        shadowRadius: 8,
        shadowOffset: {
          width: 0,
          height: 4,
        },
      },
      containerTrash: {
        flexDirection: 'row', 
        width: '15%'
      }
});

export default styles;
