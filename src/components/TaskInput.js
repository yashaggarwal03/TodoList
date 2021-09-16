import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

const TaskInput = (props) => {
    const [enteredTask, setEnteredTask] = useState('');

    const handleTask = enteredText => {
        setEnteredTask(enteredText);
    };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter the task"
        style={styles.input}
        value={enteredTask}
        onChangeText={handleTask}
      />
      <Button title="ADD" onPress={props.onAddTask.bind(this, enteredTask)} />
      {/* <Button title="ADD" onPress={() => props.onAddTask(enteredTask)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    input: {
        borderColor: '#000',
        borderWidth: 1,
        width: '80%',
        padding: 10,
      },
});

export default TaskInput;
