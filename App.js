import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import  AppLoading  from "expo-app-loading"

import {Navbar} from "./src/components/Navbar"
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen} from "./src/screens/TodoScreen"
import { THEME } from './src/themes/theme';

async function loadApp() {
    await Font.loadAsync({
      "light": require("./assets/fonts/Newsreader-Light.ttf"),
      "medium": require("./assets/fonts/Newsreader-Medium.ttf"),
      "bold":require("./assets/fonts/Newsreader-Bold.ttf")
    })
  }
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const[todoId, setTodoId]=useState(null)
  //todos -  стейт для списка дел
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    {id:"2", title:"Do English"}
  ]);
  //проверка на загрузку страницы
  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={loadApp}
        onError={err=>console.log(err)}
        onFinish={()=>setIsLoaded(true)}
      />
    )
  }

  //функция которая устанавливает новый стейт при добавлении элемента
  const addTodo = (title) => {
    setTodos(prevProps => [...prevProps,
        {
          id:  Date.now().toString(),
          title
        }
      ]
    )
  }
  //функция которая устанавливает новый стейт при удалении элемента
  const removeTodo = (id) => {
    const activeItem=todos.find(item => item.id ==id)
    Alert.alert(
      "Delete",
      `Do you want to delete "${activeItem.title}"?`,
      [
        {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Delete", onPress: () => {
          //сразу перекидываем на главную страницу
          setTodoId(null)
          setTodos(prevProps => prevProps.filter(item => item.id !== id))
        }
      }
      ],
      {cancelable:false}
      
    )
  
  }
  //функция, которая сохраняет новое значение todo после изменения в модальном окне
  const saveTodo = (id, title) => {
    setTodos(prevProps => prevProps.map(item => {
      if (item.id == id) {
        item.title=title
      }
      return item
    }))
  }
  //переключение между єкранами
  let content= <MainScreen
    todos={todos}
    addTodo={addTodo}
    removeTodo={removeTodo}
    //функция которая устанавливает айди для элемента, который выбран
    openTodoScreen={setTodoId}
  />
  if (todoId) {
    content = <TodoScreen
      closeTodoScreen={() => setTodoId(null)}
      todo={todos.find(item => item.id == todoId)}
      removeTodo={removeTodo}
      saveTodo={saveTodo }/>
  }
  return (
    <View >
      <Navbar />
      <View style={styles.container}>
        {content}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_GORIZONTAL,
    paddingVertical:20
  }
});
