import React, { useState} from "react"
import { Button, TextInput, StyleSheet, View, Modal, Alert } from "react-native"
import { THEME } from "../themes/theme"

export const AppModal = ({ visible, cancelModal, todoTitle, editTodo }) => {
    //создаем стейт, который хранит текст который введен в импут
    const [title, setTitle] = useState(todoTitle)
    //функция, которая позволяет валидировать значение импута
    const saveHeandler = () => {
        if (title.length < 3) {
            Alert.alert("Error", `Количество символо должно быть больше 3б сейчас ${title.length} символов`)
        } else {
            editTodo(title)
        }
    }
    return (
        <Modal visible={visible}
            animationType="slide"
            transparent={false}>
            <View style={ styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder="What do you want to do?"
                    maxLength={65} />
                <View style={ styles.buttons}>
                    <Button title="Cancel" color={THEME.RED_COLOR} onPress={ cancelModal}/>
                    <Button title="Save" onPress={saveHeandler}/>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    wrap: { 
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
        
    },
    input: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth:2,
        width: "80%",
        padding: 15,
        marginBottom:40
    },
    buttons: {
        width: "100%",
        flexDirection: "row",
        justifyContent:"space-around"
    }
})