import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

import ListItem from './src/components/ListItem';
import TaskInput from './src/components/TaskInput';

const App = () => {
  
  const [todoList, setTodoList] = useState([]);


  const handleList = (taskTitle) => {
    setTodoList([...todoList, taskTitle]);
  };
  const deleteTask = (taskIndex) => {
    setTodoList(todoList.filter((task, index) => index !== taskIndex))
  }

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={handleList}/>
      <FlatList
        data={todoList}
        renderItem={itemData => <ListItem index={itemData.index} onDelete={deleteTask} title={itemData.item}/> }
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
