import React, {FC} from 'react';
import { Text,TouchableOpacity, Modal, View } from 'react-native';

import styles from './styles';

type Props = {
  onConfirm: (status: string) => void;
  visible: boolean;
};

const ModalFilter: FC<Props> = ({
  onConfirm,
  visible,
}) => {
  return (
    <Modal
      testID="modal-filter"
      accessibilityLabel="modal-filter"
      animationType="slide"
      visible={visible}
      transparent>
      <View style={styles.container}>
        <View testID="modal-choose-filter" style={styles.contentContainer}>
            <View style={{paddingBottom: 30}}>
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Filter Your Todo</Text>
            </View>
          <TouchableOpacity style={styles.marginVertical10} onPress={() => onConfirm('incompleted')}>
            <Text style={styles.textCenter}>Todo Pending</Text>
          </TouchableOpacity>
          <View style={styles.devider}/>
          <TouchableOpacity style={styles.marginVertical10} onPress={() => onConfirm('completed')}>
            <Text style={styles.textCenter}>Todo Done</Text>
          </TouchableOpacity>
          <View style={styles.devider}/>
          <TouchableOpacity style={styles.marginVertical10} onPress={() => onConfirm('all')}>
            <Text style={styles.textCenter}>All Todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalFilter;
