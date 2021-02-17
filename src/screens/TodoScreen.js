import React, {useState} from "react"
import { View, StyleSheet, Button } from "react-native"
import { AppCard } from "../components/ui/AppCard"
import { THEME } from "../themes/theme"
import { AppModal } from "../components/AppModal"
import {AppTextLight } from "../components/ui/AppTextLight"

export const TodoScreen = ({ todo, closeTodoScreen, removeTodo, saveTodo }) => {
    //устанавливаем стейт для значения видимости модального окна

    const [modal, setModal] = useState(false)
    
    //функция, которая получает текст с модального окна, и передает эти данные вместа с айди выше в App.js
    const editTodo = (title) => {
        saveTodo(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <AppModal visible={modal} cancelModal={() => setModal(false)} todoTitle={todo.title} editTodo={editTodo}/>
            <AppCard style={styles.box}>
                <AppTextLight style={styles.text}>{todo.title}</AppTextLight>
                <Button title="Edit" color={THEME.MAIN_COLOR} onPress={()=>setModal(true)}/>
            </AppCard>
            <View style={ styles.buttons}>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={closeTodoScreen} color={THEME.GREY_COLOR}/>
                </View>
                <View style={styles.button}>
                    <Button title="Delete" color={THEME.RED_COLOR} onPress={()=>removeTodo(todo.id)}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent:"space-around"
    },
    button: {
        width: "40%"
    },
    text: {
        fontSize:25
    },
    box: {
        marginBottom:30
    }
})