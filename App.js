import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/button/button";
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import Preloader from "./screens/preloader";
import Home from "./screens/Home/home";
import { BaseURL, token } from "./secrets";
import Login from "./screens/Login/login";
import QuickBroadcast from "./screens/QuickBroadcast/quickBroadcast";
import NewBroadcast from "./screens/NewBroadcast/newBroadcast";
import Sectors from "./screens/Sectors/sectors";

const App = () => {

  const api = axios.create({
    baseURL: BaseURL,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
    
  });

  const Stack = createStackNavigator();

  const PushSMSAPI = async () => {
    const formData = new FormData();

    formData.append("token", token);
    formData.append("sender", "Twireless");
    formData.append("to", "08072565304");
    formData.append("message", "Internet service is not available");
    formData.append("type", "0");
    formData.append("routing", "4");
    // formData.append("ref_id", "unique-ref-id");
    // formData.append("simserver_token", "simserver-token");
    // formData.append("dlr_timeout", "dlr-timeout");
    // formData.append("schedule", "time-in-future");
    let res = await api
      .post("/sms/",formData)
      .then((result) => {
        console.log(result);
        console.log(
          "________________________________________________________________"
        );
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="preloader">
        {/* <Stack.Screen name="preloader" component={Preloader}  options={{headerShown: false}}/>
        <Stack.Screen name="login" component={Login}  options={{headerShown: false}}/> */}
        <Stack.Screen name="home" component={Home}  options={{headerShown: false}}/>
        <Stack.Screen name="quickBroadcast" component={QuickBroadcast}  options={{headerShown: false} } />
        <Stack.Screen name="newBroadcast" component={NewBroadcast}  options={{headerShown: false} } />
        <Stack.Screen name="sectors" component={Sectors}  options={{headerShown: false} } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
