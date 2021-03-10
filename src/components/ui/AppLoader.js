import React from "react"
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { THEME } from "../../themes/theme"

export const AppLoader = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" color={THEME.MAIN_COLOR}/>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    }
})