import React, { useState} from "react"
import { TextInput, StyleSheet, View, Modal, Alert } from "react-native"
import { THEME } from "../themes/theme"
import { Ionicons } from '@expo/vector-icons'; 
import { AppButton } from "./ui/AppButton"
import { MaterialIcons } from '@expo/vector-icons'; 


export const AppModal = ({ visible, cancelModal, todoTitle, editTodo }) => {
    //создаем стейт, который хранит текст который введен в импут
    const [title, setTitle] = useState(todoTitle)
    //функция, которая позволяет валидировать значение импута
    const saveHeandler = () => {
        if (title.length < 3) {
            Alert.alert("Error", `Количество символо должно быть больше 3б сейчас ${title.length} символов`)
        } else {
            setTitle(todoTitle)
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
                    <AppButton color={THEME.RED_COLOR} onPress={cancelModal}>
                        <Ionicons name="arrow-back" size={30} color="white" />
                    </AppButton>
                    <AppButton
                        onPress={saveHeandler}
                        color="#98fb98"
                    >
                        <MaterialIcons name="done" size={25} color="white" />
                    </AppButton>
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