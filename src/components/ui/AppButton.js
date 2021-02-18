import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { THEME } from "../../themes/theme"
import { AppTextBold } from "./AppTextBold"

export const AppButton = ({children, onPress, color=THEME.MAIN_COLOR, style}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} >
            <View style={{ ...styles.button, backgroundColor: color, ...style }}>
                <AppTextBold>
                    {children}
                </AppTextBold>
            </View>
        </TouchableOpacity>
    )
}
 const styles = StyleSheet.create({
        button: {
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical:10,
            borderRadius: 5,
            height: 50,
            width: 100
        }
})