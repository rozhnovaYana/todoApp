import React from "react"
import { View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native"
import { THEME } from "../../themes/theme"
import { AppTextBold } from "./AppTextBold"

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR, style }) => {
    //проверка на платформу
    const Wrapper = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <Wrapper activeOpacity={0.7} onPress={onPress} >
            <View style={{ ...styles.button, backgroundColor: color, ...style }}>
                <AppTextBold>
                    {children}
                </AppTextBold>
            </View>
        </Wrapper>
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