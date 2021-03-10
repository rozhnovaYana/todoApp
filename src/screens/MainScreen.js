import React, {useState, useEffect, useContext, useCallback} from "react"
import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native"
import { AddTodo } from "../components/AddTodo"
import { TodoList} from "../components/TodoList"
import { TodoContext } from "../context/todo/todoContext"
import {AppLoader} from "../components/ui/AppLoader"
import { ScreensContext } from "../context/screens/screensContext"
import { THEME } from "../themes/theme"
import { AppText } from "../components/ui/AppText"
import { AppButton } from "../components/ui/AppButton"



export const MainScreen = () => {
    const { addTodo, removeTodo, todos, fetchTodos, loading, error } = useContext(TodoContext)
    const {changeScreen} =useContext(ScreensContext)
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
    
    const fetchCallBack = useCallback(async () => await fetchTodos(), [fetchTodos])
    
    useEffect(() => {
            fetchCallBack()
        }, [])
    if (error) {
        return (
            <View style={styles.error}>
                <AppText>{error}</AppText>
                <AppButton onPress={fetchCallBack}>Retry</AppButton>
            </View>
        )
    
    }
    if (loading) {
        return <AppLoader/>
    }
    let content = (
        <View style={{width: deviceWidth}}>
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoList item={item} removeItem={removeTodo} openTodoScreen={ changeScreen} />}
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
    },
    error: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    }
})