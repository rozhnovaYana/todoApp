import React, {useState, useEffect} from "react"
import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native"
import { AddTodo } from "../components/AddTodo"
import { TodoList} from "../components/TodoList"
import { THEME } from "../themes/theme"

export const MainScreen = ({ addTodo, removeTodo, todos, openTodoScreen }) => {
    //создаем стейт для значения ширины экрана
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get("window").width - THEME.PADDING_GORIZONTAL * 2)
    //useEffect используем для того, чтобы функция выполнялась только один раз при первом рендеринге
    useEffect(() => {
        const update = () => {
            const width = Dimensions.get("window").width - THEME.PADDING_GORIZONTAL * 2;
            //устанавливаем стейт для ширины
            setDeviceWidth(width)
        }
        //вешаем обработчик на изменение положения экрана
        Dimensions.addEventListener('change', update)
        //очистка перед тем, как удалить элемент со страницы
        return () => {
            Dimensions.removeEventListener("change", update)
        }


    }

    )
    let content = (
        <View style={{width: deviceWidth}}>
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoList item={item} removeItem={removeTodo} openTodoScreen={ openTodoScreen} />}
                keyExtractor={ item=>item.id}
            />
        </View>
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