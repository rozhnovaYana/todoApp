import React from "react"
import { View, StyleSheet } from "react-native"
import { THEME } from "../themes/theme"
import {AppTextBold} from "./ui/AppTextBold"



export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <AppTextBold style={ styles.text}>ToDo App</AppTextBold>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar: {
        height: 70,
        backgroundColor: THEME.MAIN_COLOR,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom:10
    },
    text:{
        color: "white",
        fontSize:20
    }
})