import React from "react"
import { View, StyleSheet, FlatList, Image } from "react-native"
import { AddTodo } from "../components/AddTodo"
import { TodoList} from "../components/TodoList"

export const MainScreen = ({ addTodo, removeTodo, todos, openTodoScreen}) => {
    let content = (
        <FlatList
                data={todos}
                renderItem={({ item }) => <TodoList item={item} removeItem={removeTodo} openTodoScreen={ openTodoScreen} />}
                keyExtractor={ item=>item.id}
            />
    )
    //создаем картинку, если нет данных todos
    if (!todos.length) {
        content = (
            <View style={ styles.imageWrapper}>
                <Image source={require("../../assets/no-items.png")}
                    style={ styles.img}/>
            </View>
        )
    }
    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        justifyContent: "center",
        alignItems: "center",
        height: 300,
        padding:10
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode:"contain"
    }
})