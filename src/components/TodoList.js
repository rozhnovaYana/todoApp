import React from "react"
import { View, StyleSheet,  TouchableOpacity } from "react-native"
import { THEME } from "../themes/theme"
import {AppText} from "./ui/AppText"

export const TodoList = ({item, removeItem, openTodoScreen}) => {
    return (
        <TouchableOpacity
            onPress={()=>openTodoScreen(item.id)}
            onLongPress={() => removeItem(item.id)}>
            <View style={styles.wrapper}>
            <AppText style={styles.item}>{ item.title}</AppText></View>
        </TouchableOpacity>
        
    )
}
const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
        borderWidth: 2,
        borderColor: THEME.MAIN_COLOR,
        marginTop: 20,
        borderRadius: 10
    },
    item: {
        color: `black`,
        fontSize: 20
    }
})