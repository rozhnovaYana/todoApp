import React, {useState, useContext} from "react"
import {Navbar} from "./components/Navbar"
import { MainScreen } from './screens/MainScreen';
import { THEME } from './themes/theme';
import { StyleSheet, View, Alert } from 'react-native';
import { TodoContext } from "./context/todo/todoContext";
import { TodoScreen } from "./screens/TodoScreen"
import {ScreensContext}from "./context/screens/screensContext"

export const MainLayout = () => {
  const {todoId}=useContext(ScreensContext)
    // const[todoId, setTodoId]=useState(null)
    //todos -  стейт для списка дел
    // const [todos, setTodos] = useState([
   
    // ]);
    //функция которая устанавливает новый стейт при добавлении элемента
  // const addTodo = (title) => {
  //   setTodos(prevProps => [...prevProps,
  //       {
  //         id:  Date.now().toString(),
  //         title
  //       }
  //     ]
  //   )
  // }
  //функция которая устанавливает новый стейт при удалении элемента
  // const removeTodo = (id) => {
  //   const activeItem=todos.find(item => item.id ==id)
  //   Alert.alert(
  //     "Delete",
  //     `Do you want to delete "${activeItem.title}"?`,
  //     [
  //       {
  //       text: "Cancel",
  //       style: "cancel"
  //     },
  //     {
  //       text: "Delete", onPress: () => {
  //         //сразу перекидываем на главную страницу
  //         setTodoId(null)
  //         setTodos(prevProps => prevProps.filter(item => item.id !== id))
  //       }
  //     }
  //     ],
  //     {cancelable:false}
      
  //   )
  
  // }
  //функция, которая сохраняет новое значение todo после изменения в модальном окне
  // const saveTodo = (id, title) => {
  //   setTodos(prevProps => prevProps.map(item => {
  //     if (item.id == id) {
  //       item.title=title
  //     }
  //     return item
  //   }))
  //   }
    //переключение между єкранами

    return (
        <View >
            <Navbar />
            <View style={styles.container}>
              {todoId ? <TodoScreen /> : <MainScreen />}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_GORIZONTAL,
    paddingVertical:20
  }
});