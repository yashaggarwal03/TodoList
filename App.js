import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';

import ListItem from './src/components/ListItem';
import TaskInput from './src/components/TaskInput';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleList = taskTitle => {
    if (taskTitle.length === 0)
    {
      return;
    }
    setTodoList([...todoList, taskTitle]);
    setModalVisible(false);
  };
  const deleteTask = taskIndex => {
    setTodoList(todoList.filter((task, index) => index !== taskIndex));
  };
  const cancelInputHandler = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add new Task" onPress={() => setModalVisible(true)} />
      <TaskInput
        visible={modalVisible}
        onAddTask={handleList}
        onCancel={cancelInputHandler}
      />
      <FlatList
        data={todoList}
        renderItem={itemData => (
          <ListItem
            index={itemData.index}
            onDelete={deleteTask}
            title={itemData.item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});

export default App;
