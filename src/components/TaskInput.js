import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Modal} from 'react-native';

const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState('');

  const handleTask = enteredText => {
    setEnteredTask(enteredText);
  };
  const clearInput = () => {
    props.onAddTask(enteredTask);
    setEnteredTask('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter the task"
          style={styles.input}
          value={enteredTask}
          onChangeText={handleTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={clearInput} />
            {/* <Button title="ADD" onPress={() => props.onAddTask(enteredTask)} /> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
  },
  button: {
    width: '40%',
  },
});

export default TaskInput;
