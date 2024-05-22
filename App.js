import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Routes from "./src/routes";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "./src/tabs/Feed";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";


// export function App(){
//     return(
//         <NavigationContainer>
//             <Routes />
//         </NavigationContainer>
//     );
// }

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Feed' component={Feed}/>
        </Tab.Navigator>
    );
}

function HomeScreen({navgation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button 
            onPress={() => navgation.navigate('Notifications')}
            title="Go to Notifications"
            />
        </View>
    );
}
function NotificationsScreen({navgation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button 
            onPress={() => navgation.goBack()} title="Go to back home"
            />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Main" component={MyTabs}/>
                <Drawer.Screen name="Home" component={HomeScreen} options={{}}/>
                <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}