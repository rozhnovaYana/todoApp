import React from "react"
import { StyleSheet, View } from "react-native"
import { THEME } from "../../themes/theme"

export const AppCard = (props) => {
    return (
        <View style={{ ...styles.wrapper, ...props.style }}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        shadowColor: THEME.GREY_COLOR,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        elevation: 8,
        backgroundColor: "white",
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        alignItems:"center"
    }
})