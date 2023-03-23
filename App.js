import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem';
import Addtodo from './components/Addtodo';

export default function App() {
  const[todos,setTodos]=useState([
    {text:'buy coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play on the swith',key:'3'}
  ]);

  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key)
    })
  }

  const submitHandler=(text)=>{
    setTodos((prevtodos)=>{
      return[
        {text:text , key:Math.random().toString()},
        ...prevtodos
      ];
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <Addtodo submitHandler={submitHandler}/>
      </View>
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({item})=>(
            <TodoItem item={item} pressHandler={pressHandler}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
    padding:40,
  }
});
