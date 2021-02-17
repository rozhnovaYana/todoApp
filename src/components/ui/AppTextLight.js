import React from "react"
import { Text, StyleSheet } from "react-native"

export const AppTextLight = (props) => <Text style={{
    ...style.default, ...props.style
}}>{props.children}</Text>
    
const style = StyleSheet.create({
    default: {
        fontFamily:"light"
    }
})