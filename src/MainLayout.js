import React, {useState, useContext} from "react"
import {Navbar} from "./components/Navbar"
import { MainScreen } from './screens/MainScreen';
import { THEME } from './themes/theme';
import { StyleSheet, View, Alert } from 'react-native';
import { TodoContext } from "./context/todo/todoContext";
import { TodoScreen } from "./screens/TodoScreen"
import {ScreensContext}from "./context/screens/screensContext"

export const MainLayout = () => {
  const {todoId}=useContext(ScreensContext)

  return (
    <View style={styles.wrapper}>
            <Navbar />
            <View style={styles.container}>
              {todoId ? <TodoScreen /> : <MainScreen />}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_GORIZONTAL,
    paddingVertical: 20,
    flex:1
  },
  wrapper: {
    flex:1
  }
});