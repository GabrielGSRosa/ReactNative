import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Input from './components/Input';
import AddButton from './components/AddButton';
import ViewTaks from './components/ViewTasks';


export default function App() {
  const [tasks, setTasks] = useState(["teste", "teste 2"])
  const [taskName, setTaskName] = useState('')

  const addTask = (newTaskName: string) => {
    if(newTaskName == ""){ return };
    
    setTasks([...tasks, newTaskName])
    setTaskName('')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={[styles.title, {color: 'white'}]}>Lista de Tarefas</Text>
      <View style={styles.inputArea}>
        <Input value={taskName} onChange={setTaskName} />
        <AddButton onAdd={() => addTask(taskName)} />
      </View>
      <ViewTaks tarefas={tasks} onDelete={setTasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    paddingVertical: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: 800,
  },
  inputArea: {
    flexDirection: 'row',
    marginTop: 14,
  }
});
