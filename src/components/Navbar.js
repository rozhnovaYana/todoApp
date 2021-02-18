import React from "react"
import { View, StyleSheet, Platform } from "react-native"
import { THEME } from "../themes/theme"
import {AppTextBold} from "./ui/AppTextBold"



export const Navbar = () => {
    return (
        <View
            style={{
                ...styles.navbar,
                ...Platform.select({
                    android:styles.navbarAndroid
                })
            }}>
            <AppTextBold style={ styles.text}>ToDo App</AppTextBold>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar: {
        height: 70,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom:10
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    text:{
        color: Platform.OS==="android"?"white":THEME.MAIN_COLOR,
        fontSize:20
    }
})