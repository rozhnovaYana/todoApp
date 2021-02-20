import React, {useState} from "react"
import { View, StyleSheet, Dimensions } from "react-native"
import { AppCard } from "../components/ui/AppCard"
import { THEME } from "../themes/theme"
import { AppModal } from "../components/AppModal"
import { AppTextLight } from "../components/ui/AppTextLight"
import { AppButton } from "../components/ui/AppButton"
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 



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
                <AppButton color={THEME.MAIN_COLOR} onPress={() => setModal(true)}>
                    <AntDesign name="edit" size={24} color="white" />
                </AppButton>
            </AppCard>
            <View style={ styles.buttons}>
                <View style={styles.button}>
                    <AppButton onPress={closeTodoScreen} color={THEME.GREY_COLOR} style={styles.btn}>
                        <MaterialIcons name="cancel" size={30} color="white" />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton color={THEME.RED_COLOR} onPress={() => removeTodo(todo.id)} style={styles.btn}>
                        <AntDesign name="delete" size={30} color="white" />
                    </AppButton>
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
        width: "40%",
        justifyContent: "center",
        alignItems:"center"
    },
    text: {
        fontSize:25
    },
    box: {
        marginBottom:30
    },
    btn: {
        height: 60,
        width:Dimensions.get("window").width/3
    }
})