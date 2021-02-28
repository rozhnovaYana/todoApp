import React, {useState} from 'react';
import * as Font from 'expo-font';
import  AppLoading  from "expo-app-loading"
import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/TodoState';

async function loadApp() {
    await Font.loadAsync({
      "light": require("./assets/fonts/Newsreader-Light.ttf"),
      "medium": require("./assets/fonts/Newsreader-Medium.ttf"),
      "bold":require("./assets/fonts/Newsreader-Bold.ttf")
    })
  }
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  //проверка на загрузку страницы
  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={loadApp}
        onError={err=>console.log(err)}
        onFinish={()=>setIsLoaded(true)}
      />
    )
  }


  
  return (
  <TodoState>
       <MainLayout/>
   </TodoState>
  );
}


