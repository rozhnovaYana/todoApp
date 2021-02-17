import React, {useState} from "react"
import { View, StyleSheet, TextInput, Alert } from "react-native"
import { THEME } from "../themes/theme"
import { EvilIcons } from '@expo/vector-icons'

export const AddTodo = ({ onSubmit }) => {
    //устанавливаем стейт для значения импута
    const [value, setValue] = useState("");
    const addNewTodo = () => {
        if (value.length) {
         onSubmit(value);
        setValue("") //очищаем value   
        } else {
            Alert.alert("Enter something")
        }
    }
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                placeholder="Enter something"
                value={value} />
            <EvilIcons.Button  onPress={addNewTodo} name="plus" >Add</EvilIcons.Button>
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    input: {
        width: "70%",
        borderColor: THEME.MAIN_COLOR,
        borderWidth: 2,
        paddingHorizontal: 15,
        paddingVertical:5
    }
})