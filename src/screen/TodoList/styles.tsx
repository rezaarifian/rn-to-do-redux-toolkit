import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
      buttonStyle: {
        padding: 10,
        margin: 10,
        width: '90%',
        borderRadius: 8,
        alignItems: 'center',
        alignSelf: 'center',
      },
      buttonTextStyle: {
        color: 'white',
        fontSize: 16,
      },
});

export default styles;
