import * as React from "react";

import Home from "./src/pages/home";
import Login from "./src/pages/Login/Login"

// import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";


const Drawer =  createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();


function HomeScreen() {

    return(
        <Tab.Navigator initialRouteName="Home">

             <Tab.Screen name="Home" component={Home}/>    

             <Tab.Screen name="Login" component={Login}/>      
               

        </Tab.Navigator>
    );
}


function App() {
    return(
         <NavigationContainer>

            <Drawer.Navigator screenOptions={{ headerShown: false }}>

                   <Drawer.Screen name="Login" component={Login} />
                   <Drawer.Screen name="Home" component={HomeScreen} />
                   

            </Drawer.Navigator>

         </NavigationContainer>
    );
}

export default App;